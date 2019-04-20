# Realworld Fullstack App

---

**Goal**

Build a **real-world** fullstack application from scratch, using ((React | Angular | Vue) with (Node | Rails | Django)).

**How**

How do we build a **real** application with an ideal _____ frontend framework (React, Angular, Vue, etc.) and an ideal _____ backend framework (Node, Rails, Django, etc) and how do we deploy this to production.

To allow for the mix & match of any frontend with any backend and learn how to build a fullstack app with them, every frontend & every backend are built with the exact same app and API endpoints

**What**

This will be a production ready real-world application that is a social blogging site similar to Medium. This is a fully featured application and not like your typical ToDo apps.

This application covers most day-to-day advanced used-cases that you are going to run into while building real fullstack apps.

Building this application covers most of the advanced use cases and best practices of each framework.

Features include:

- Authentication with JWT
- Profiles with Images
- Write/edit/read articles
- Comments on articles
- Ability to "favorite" articles
- Ability to follow other users & have their articles show up in your feed

**Available Frontends**

- React / Redux
- AngularJS
- Angular 2+

**Available Backends**

- Node.js
- Django
- Rails

**Note**

There is a hosted API (thanks to RealWorld Apps) that we can build our frontend applications against should we not build a backend.

## Architecting the Stack

---

Understanding what we will be building and how our frontend & backend will be set-up

**Anatomy**

There are many different ways you can configure & build out a fullstack app.

You can have your:
- Frontend & backend codebases hosted separately
- Frontend & backend codebases hosted together
- Frontend & backend codebases hosted partially together (partially render parts of your frontend on the server ("server-side rendering"))

For simplicities sake, we decided to have all of the frontend & backend codebases separated from each other. This dramatically shortens the turnaround time for releasing updates & new features when we need to deploy frontend code independently of the backend.

## Steps

---

1. Build our backend codebase
   1. Learn how the [API spec](https://github.com/gothinkster/realworld/tree/master/api) was created
      - (We'll be using *Postman* for testing the API endpoints.)
   2. Learn how to test APIs using Postman
   3. Build the backend
2. Build our frontend codebase

## Backend

---

We built out the backend API that our frontend will communicate with.

### API Spec

---

#### Running API tests locally

---

To locally run the provided Postman collection against your backend, execute:

`APIURL=http://localhost:3000/api .run-api-tests.sh`

For more details, see [run-api-tests.sh](https://github.com/gothinkster/realworld/blob/master/api/run-api-tests.sh)

#### Considerations for your backend with [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

---

If the backend is about to run on a different host/port than the frontend, make sure to handle `OPTIONS` too and return correct `Access-Control-Allow-Origin` and `Access-Control-Allow-Headers` (e.g. `Content-Type`).

##### Authentication Header

`Authorization: Token jwt.token.here`

#### JSON Objects returned by API

---

Make sure the right content type like `Content-Type: application/json; charset=utf-8` is correctly returned.

##### Users (for authentication)

```json
{
  "user": {
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
    "username": "jake",
    "bio": "I work at statefarm",
    "image": null
  }
}
```

##### Profile

```json
{
  "profile": {
    "username": "jake",
    "bio": "I work at statefarm",
    "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
    "following": false
  }
}
```

##### Single Article

```json
{
  "article": {
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }
}
```

##### Multiple Articles

```json
{
  "articles":[{
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }, {
    "slug": "how-to-train-your-dragon-2",
    "title": "How to train your dragon 2",
    "description": "So toothless",
    "body": "It a dragon",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }],
  "articlesCount": 2
}
```

##### Single Comment

```json
{
  "comment": {
    "id": 1,
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:22:56.637Z",
    "body": "It takes a Jacobian",
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }
}
```

##### Multiple Comments

```json
{
  "comments": [{
    "id": 1,
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:22:56.637Z",
    "body": "It takes a Jacobian",
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }]
}
```

##### List of Tags

```json
{
  "tags": [
    "reactjs",
    "angularjs"
  ]
}
```

##### Errors and Status Codes

If a request fails any validations, expect a 422 and errors in the following format:

```json
{
  "errors": {
    "body": [
      "can't be empty
    ]
  }
}
```

###### Other status codes:

**401**: for Unauthorized Requests (when a request requires authentication but it isn't provided).

**403**: for Forbidden Requests (when a request may be valid but the user doesn't have permission to perform the action).

**404**: for Not Found Requests (when a resource can't be found to fulfill the request).

#### Endpoints:

---

##### Authentication

`POST /api/users/login`

Example request body:

```json
{
  "user": {
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

##### Registration

```json
POST /api/users
```

Example request body:

```json
{
  "user": {
    "username": "jacob",
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a [User](https://github.com/gothinkster/realworld/tree/master/api#users-for-authentication)

##### Get Current User

`GET /api/user`

Authentication required, returns a [User](https://github.com/gothinkster/realworld/tree/master/api#users-for-authentication) that's the current user

##### Update User

`PUT /api/user`

Example request body:

```json
{
  "user": {
    "email": "jake@jake.jake",
    "bio": "I like to skateboard",
    "image": "https://i.stack.imgur.com/xHWG8.jpg"
  }
}
```

Accepted fields: `email`, `username`, `password`, `image`, `bio`

##### Get Profile

`GET /api/profiles/:username`

Authentication optional, returns a [Profile](https://github.com/gothinkster/realworld/tree/master/api#profile)

##### Follow user

`POST /api/profiles/:username/follow`

Authentication required, returns a [Profile](https://github.com/gothinkster/realworld/tree/master/api#profile)

No additional parameters required

##### Unfollow user

`DELETE /api/profiles/:username/follow`

Authentication required, returns a [Profile](https://github.com/gothinkster/realworld/tree/master/api#profile)

No additional parameters required

##### List Articles

`GET /api/articles`

Returns most recent articles globally by default, provide `tag`, `author` or `favorited` query parameter to filter results

**Query Parameters**:

Filter by tag:

`?tag=AngularJS`

Filter by author:

`?author=jake`

Favorited by user:

`?favorited=jake`

Limit number of articles (default is 20):

`?limit=20`

Offset/skip number of articles (default is 0):

`?offset=0`

Authentication optional, will return [multiple articles](https://github.com/gothinkster/realworld/tree/master/api#multiple-articles), ordered by most recent first

##### Feed Articles

`GET /api/articles/feed`

Can also take `limit` and `offset` query parameters like [List Articles](https://github.com/gothinkster/realworld/tree/master/api#list-articles)

Authentication required, will return [multiple articles](https://github.com/gothinkster/realworld/tree/master/api#multiple-articles) created by followed users, ordered by most recent first

##### Get Article

`GET /api/articles/:slug`

No authentication required, will return [single article](https://github.com/gothinkster/realworld/tree/master/api#single-article)

##### Create Article

`POST /api/articles`

Example request body:

```json
{
  "article": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": ["reactjs", "angularjs", "dragons"] 
  }
}
```

Authentication required, will return an [Article](https://github.com/gothinkster/realworld/tree/master/api#single-article)

Required fields: `title`, `description`, `body`

Optional fields: `tagList` as an array of Strings

##### Update Article

`PUT /api/articles/:slug`

Example request body:

```json
{
  "article": {
    "title": "Did you train your dragon?"
  }
}
```

Authentication required, returns the updated [Article](https://github.com/gothinkster/realworld/tree/master/api#single-article)

Optional fields: `title`, `description`, `body`

The `slug` also get updated when the `title` is changed

##### Delete Article

`DELETE /api/articles/:slug`

Authentication required

##### Add Comments to an Article

`POST /api/articles/:slug/comments`

Example request body:

```json
{
  "comment": {
    "body": "His name was my name too."
  }
}
```

Authentication required, returns the created [Comment](https://github.com/gothinkster/realworld/tree/master/api#single-comment)

Required field: `body`

##### Get Comments from an Article

`GET /api/articles/:slug/comments`

Authentication optional, returns [multiple comments](https://github.com/gothinkster/realworld/tree/master/api#multiple-comments)

##### Delete Comment

`DELETE /api/articles/:slug/comments/:id`

Authentication required

##### Favorite Article

`POST /api/articles/:slug/favorite`

Authentication required, returns the [Article](https://github.com/gothinkster/realworld/tree/master/api#single-article)

No additional parameters required

##### Unfavorite Article

`DELETE /api/articles/:slug/favorite`

Authentication required, returns the [Article](https://github.com/gothinkster/realworld/tree/master/api#single-article)

No additional parameters required

##### Get Tags

`GET /api/tags`

No authentication required, returns a [List of Tags](https://github.com/gothinkster/realworld/tree/master/api#list-of-tags)

## Shoutouts

[RealWorld Apps](https://realworld.io)
[Thinkster](https://thinkster.io)

Made with :heart: by GIII
