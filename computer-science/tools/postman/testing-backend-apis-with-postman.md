# Postman - Testing Backend APIs with Postman

---

Using Postman to make HTTP requests to a server and verify the responses using tests.

## What is Postman?

---

> **Postman** is a useful tool for testing the functionality of API endpoints.

Postman provides a friendly user interface for constructing HTTP requests (as opposed to using command line tools like `curl` or `wget`).

Postman gives us the ability to write tests against the responses of requests to see if the server is returning the correct results. Requests constructed in Postman can also be bundled into a collection and easily exported or shared, making Postman great for collaborating on and sharing API specifications with others. Postman collections can also be used with continuous integration (CI) systems so that the same collection used to test an API locally while developing can also be used to determine whether or not the codebase should be pushed live onto production.

**Automated testing with Newman**

Do amazing things with Postman's command line companion. With `newman`, you can integrate Postman collections with your build system. Or you can run automated tests for you API through a cron job. [Get Newman](https://www.npmjs.com/package/newman)

[Install Postman](https://www.getpostman.com/downloads/)
