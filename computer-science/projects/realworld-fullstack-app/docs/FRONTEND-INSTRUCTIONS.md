> Note: Delete this file before publishing your app!

## Using the hosted API

---

Point your [API requests](https://github.com/TexasBullet26/trey-learns/tree/master/computer-science/projects/realworld-fullstack-app/api) to `https://conduit.productionready.io/api` and you're good to go!

## Routing Guidelines

---

- Home page (URL: `/#/`)
  - List of tags
  - List of articles pulled from either Feed, Global, or by Tag
  - Pagination for list of articles
- Sign in/Sign up pages (URL: `/#/login`, `/#/register`)
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

## Styles

---

Instead of having the Bootstrap theme included locally, we recommend loading the pre-compiled theme from our CDN (our [header template](https://github.com/TexasBullet/trey-learns/blob/master/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/FRONTEND_INSTRUCTIONS.md#header) does this by default):

```html
<link rel="stylesheet" href="//demo.productionready.io/main.css">
```

Alternatively, if you want to make modifications to the theme, check out the [theme's repo](https://github.com/TexasBullet26/conduit-bootstrap-template).

## Templates

---

- [Layout](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#layout)
  - [Header](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#header)
  - [Footer](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#footer)
- [Pages](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#pages)
  - [Home](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#home)
  - [Login/Register](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#loginregister)
  - [Profile](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#profile)
  - [Settings](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#settings)
  - [Create/Edit Article](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#createedit-article)
  - [Article](https://github.com/TexasBullet/trey-learns/computer-science/projects/realworld-fullstack-app/client/frontend-instructions/blob/master/FRONTEND_INSTRUCTIONS.md#article)

### Layout

---

#### Header

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TBD</title>
    <!-- Import Ionicon icons & Google Fonts our Bootstrap theme relies on -->
    <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
    <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
    <!-- Import the custom Bootstrap 4 theme from our hosted CDN -->
    <link rel="stylesheet" href="//demo.productionready.io/main.css">
  </head>
  <body>

    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">TBD</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page -->
            <a class="nav-link active" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  </body>
</html>
```

#### Footer

```html
<footer>
  <div class="container">
    <a href="/" class="logo-font">TBD</a>
    <span class="attribution">
      Footer from<a href="">TBD</a>
    </span>
  </div>
</footer>
```

### Pages

---

#### Home

```html
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">TBD</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link disabled" href="">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>

        <div class="article-preview">
          <div class="article-meta">
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 29
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div>

        <div class="article-preview">
          <div class="article-meta">
            <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
            <div class="info">
              <a href="" class="author">Albert Pai</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 32
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div>

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <a href="" class="tag-pill tag-default">programming</a>
            <a href="" class="tag-pill tag-default">javascript</a>
            <a href="" class="tag-pill tag-default">emberjs</a>
            <a href="" class="tag-pill tag-default">angularjs</a>
            <a href="" class="tag-pill tag-default">react</a>
            <a href="" class="tag-pill tag-default">mean</a>
            <a href="" class="tag-pill tag-default">node</a>
            <a href="" class="tag-pill tag-default">rails</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
```

#### Login/Register

```html
<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Sign up</h1>
        <p class="text-xs-center">
          <a href="">Have an account?</a>
        </p>

        <ul class="error-messages">
          <li>That email is already taken</li>
        </ul>

        <form>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            Sign up
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
```

#### Profile

```html
<div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img src="#" class="user-img" />
          <h4>Glenn Lanzer III</h4>
          <p>
            Write description about yourself...
          </p>
          <button class="btn btn-sm btn-outline-secondary action-btn">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow Glenn Lanzer III
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link active" href="">My Articles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">Favorited Articles</a>
            </li>
          </ul>
        </div>

        <div class="article-preview">
          <div class="article-meta">
            <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 29
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div>

        <div class="article-preview">
          <div class="article-meta">
            <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
            <div class="info">
              <a href="" class="author">Albert Pai</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 32
            </button>
          </div>
          <a href="" class="preview-link">
            <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
            <ul class="tag-list">
              <li class="tag-default tag-pill tag-outline">Music</li>
              <li class="tag-default tag-pill tag-outline">Song</li>
            </ul>
          </a>
        </div>


      </div>

    </div>
  </div>

</div>
```

#### Settings

```html
<div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form>
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
```

#### Create/Edit Article

```html
<div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control form-control-lg" placeholder="Article Title">
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="What's this article about?">
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="button">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
```

#### Article

```html
<div class="article-page">

  <div class="banner">
    <div class="container">

      <h1>How to build webapps that scale</h1>

      <div class="article-meta">
        <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
          <a href="" class="author">Eric Simons</a>
          <span class="date">January 20th</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>

    </div>
  </div>

  <div class="container page">

    <div class="row article-content">
      <div class="col-md-12">
        <p>
        Web development technologies have evolved at an incredible clip over the past few years.
        </p>
        <h2 id="introducing-ionic">Introducing RealWorld.</h2>
        <p>It's a great solution for learning how other frameworks work.</p>
      </div>
    </div>

    <hr />

    <div class="article-actions">
      <div class="article-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
          <a href="" class="author">Eric Simons</a>
          <span class="date">January 20th</span>
        </div>

        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>
    </div>

    <div class="row">

      <div class="col-xs-12 col-md-8 offset-md-2">

        <form class="card comment-form">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        
        <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
          </div>
        </div>

        <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
            <span class="mod-options">
              <i class="ion-edit"></i>
              <i class="ion-trash-a"></i>
            </span>
          </div>
        </div>
        
      </div>

    </div>

  </div>

</div>
```