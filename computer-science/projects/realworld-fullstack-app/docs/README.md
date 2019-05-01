# Frontend and Backend Specs

---

## If wanting to implement in a new framework

---

1. [Fork our starter kit](https://github.com/gothinkster/realworld-starter-kit) **and get started**

## Creating New Framework Implementations

---

### Remember: Keep your codebases *simple*, yet *robust*

---

If a newbie dev to your framework comes along and can't grasp the high-level architecture within 10 minutes, it probably means that you went a little overboard in the engineering department.

Alternatively, you should *never* forgo following fundamental best practices for the sake of simplicity, lest we teach that same newbie dev the *wrong* way of doing things.

The quality & architecture of our implementations should reflect something similar to an early stage startup's MVP: functionally complete & stable, but not unnecessarily over-engineered.

### Project Overview

---

"To Be Named" is a social blogging site similar to functionality to Medium. It uses a custom API for all requests, including authentication. You can view a live demo at [To be determined]()

**General functionality:**

- Authenticate users via JWT (login/sign-up pages + logout button on settings page)
- CRU* users (sign-up & settings page - no deleting required)
- CRUD Articles
- CR*D Comments on articles (no updating required)
- GET and display paginated lists of articles
- Favorite articles
- Follow other users

## Frontend Specs

---

### Using the hosted API

Point your [API requests](https://github.com/gothinkster/realworld/blob/master/api) to `https://conduit.productionready.io/api` and you're good to go!

### Unit test(s)

Include *at least* **one** unit test in your repo to demonstrate how testing works (full testing coverage is *not* required!)

### Styles/Templates

We created a custom Bootstrap 4 style & templates to ensure all frontends had consistent UI functionality. [Templates & info required to get up and running](https://github.com/gothinkster/realworld-starter-kit/blob/master/FRONTEND_INSTRUCTIONS.md)

### Routing Guidelines

- Home page (URL: `/#/`)
  - List of tags
  - List of articles pulled from either Feed, Global, or by Tag
  - Pagination for list of articles

- Sign-in/Sign-up pages (URL: `/#/login`, `/#/register`)
  - Uses JWT (store the token in localStorage)
  - Authentication can be easily switched to session/cookie based

- Settings page (URL: `/#/settings`)
- Editor page to create/edit articles (URL: `/#/editor`, `/#/editor/article-slug-here`)
- Article page (URL: `/#/article/article-slug-here`)
  - Delete article button (only shown to article's author)
  - Render markdown from server client side
  - Comments section at bottom of page
  - Delete comment button (only shown to comment's author)

- Profile page (URL: `/#/profile/:username`, `/#/profile/:username/favorites`)
  - Show basic user info
  - List of articles populated from author's created articles or author's favorited articles

## Backend Specs

---

All backend implementations need to adhere to our [API spec](https://github.com/gothinkster/realworld/tree/master/api).

For your convenience, we have a [Postman collection](https://github.com/gothinkster/realworld/blob/master/api/Conduit.postman_collection.json) that you can use to test your API endpoints as you build your app.

Our [starter kit](https://github.com/gothinkster/realworld-starter-kit) includes [references to the API specs & testing](https://github.com/gothinkster/realworld-starter-kit/blob/master/BACKEND_INSTRUCTIONS.md) required for creating a new backend.

### Unit test(s)

Include *at least* **one** unit test in your repo to demonstrate how testing works (full testing coverage is *not* required!)

## Mobile Specs

---

[Icons for (iOS/Android)](https://github.com/gothinkster/realworld/tree/master/spec/mobile_icons)

### Using the hosted API

Point your [API requests](https://github.com/gothinkster/realworld/blob/master/api) to `https://conduit.productionready.io/api` and you're good to go!

### Styles/Templates

Unfortunately, there isn't a common way for us to reuse & share styles/templates for cross-platform mobile apps.

Instead, we recommend using the Medium.com [iOS](https://itunes.apple.com/us/app/medium/id828256236?mt=8) and [Android](https://play.google.com/store/apps/details?id=com.medium.reader&hl=en) apps as a "point of reference" regarding general UI functionality/layout, but try not to go too overboard, otherwise it will unnecessarily complicate your codebase. In other words, [KISS](https://en.wikipedia.org/wiki/KISS_principle).
