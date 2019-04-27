# Real-World Fullstack Node App (Server)

---

> Node (Express+Mongoose) codebase that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) API spec.

We are using Node as an API. To do this, we set up [Express](https://expressjs.com/) for server logic and will be using MongoDB for the database (which is a popular choice in the Node community, as MongoDB [stores data in the JSON format](https://www.mongodb.com/json-and-bson))

This `server` directory is where we build the backend in Node.js. Once the backend is completed, we can complete any frontend provided to create a client for the backend we've built.

## Code Overview

---

### Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an excpetion at the driver level. The mongoose-unique-validator plugin helps us by formatting the error like a normal mongoose ValidationError.
- [passport](https://github.com/jaredhanson/passport) - For handling user authentication
- [slug](https://github.com/dodo/node-slug) - For encoding titles into a URL-friendly format

### Application Structure

- `app.js` - The entry point to our application. This file defines our express server and connects it to MongoDB using mongoose. It also requires the routes and models we'll be using in the application.
- `config/` - This directory contains configuration for passport as well as a central location for configuration/environment variables.
- `routes/` - This directory contains the route definitions for our API. They contain
- `models/` - This directory contains the schema definitions for our Mongoose models.

### Error Handling

In `routes/api/index.js`, we define a error-handling middleware for handling Mongoose's `ValidationError`. This middleware will respond with a 422 status code and format the response to have [error messages the clients can understand](https://github.com/gothinkster/realworld/blob/master/API.md#errors-and-status-codes)

### Authentication

Requests are authenticated using the `Authorization` header with a valid JWT. We define two express middlewares in `routes/auth.js` that can be used to authenticate requests. The `required` middleware configures the `express-jwt` middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. The payload of the JWT can then be accessed from `req.payload` in the endpoint. The `optional` middleware configures the `express-jwt` in the same way as `required`, but will not return a 401 status code if the request cannot be authenticated.

## Prerequisites

---

### Environment Setup

---

**Install Node**

- via [Node's main website](https://nodejs.org/en/download/)
- via [most package managers](https://nodejs.org/en/download/package-manager/)

**[Install MongoDB](https://docs.mongodb.com/manual/installation/)**

### Project Setup

---

**Review the [API documentation](https://github.com/TexasBullet26/trey-learns/blob/master/computer-science/projects/realworld-fullstack-app/api/README.md)**

**Clone the project**

To clone the branch of [this repo](https://github.com/TexasBullet26/trey-learns), `cd computer-science/projects/realworld-fullstack-app/server`, then run the following command:

**Run `npm install` to install all the required modules for our project**
