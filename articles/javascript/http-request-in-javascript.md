# The most popular ways to make an HTTP request in JavaScript

## Ajax

Ajax is the traditional way to make an asynchronous HTTP request.

- Data can be sent using the HTTP POST method
- Data can be recieved using the HTTP GET method.

Let's take a look and make a `GET` request. Use JSONPlaceholder, a free online REST API for developers that returns random data in JSON format.

To make an HTTP call in Ajax, you need to initialize a new `XMLHttpRequest()` method, specify the URL endpoint and HTTP method (in this case GET). Finally, we use the `open()` method to tie the HTTP method and URL endpoint together and call the send() method to fire off the request.

We log the HTTP response to the console by using the `XMLHTTPRequest.onreadystatechange` property which contains the event handler to be called when the `readystatechanged` event is fired.

```javascript
const Http = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = e => {
  console.log(Http.responseText);
};
```

## jQuery methods

### $.ajax

### $.get method

### $.post

### $.getJSON

## fetch

`fetch` is a new powerful web API that lets you make asynchronous requests. In fact, `fetch` is one of the best and my favorite way to make an HTTP request. It returns a "Promise" which is one of the great features of ES6. Promises allow us to handle the asyncronous request in a smarter way. Let's take a look at how `fetch` technically works.

```javascript
const Url = "https://jsonplaceholder.typicode.com/post";

fetch(Url)
  .then(data => {
    return data.json();
  })
  .then(res => {
    console.log(res);
  });
```

The `fetch` function takes one required parameter: the `endpoint` URL. It also has other optional parameters as in the example below:

```javascript
const Url = "https://jsonplaceholder.typicode.com/posts";
const Data = {
  name: "Trey",
  id: 26,
};
// optional parameters
const otherParam = {
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
  body: Data,
  method: "POST",
};

fetch(Url, otherParam)
  .then(data => {
    return data.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(error => console.log(error));
```

As you can see, `fetch` has many advantages for making HTTP requests. Additionally, within fetch there are other modules and plugins that allow us to send and receive a request to and from the server side, such as axios.

## Axios

Axios is an open source library for making HTTP requests and provides many great features.

**Usage:**

First, you need to include Axios in your project, there are two ways:

First, you can use npm:

`npm install axios --save`

Then you need to import it:

`import axios from 'axios'`

Second, you can include axios using a CDN:

`<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

**Making a Request with axios:**

With Axios you can use `GET` and `POST` to retrieve and post data from the server.

**Get:**

```javascript
const Url = "https://jsonplaceholder.typicode.com/posts";
axios
  .get(Url)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// With parameter

const Url = "https://jsonplaceholder.typicode.com/posts";
const params = {
  name: "Trey",
  id: 26,
};
axios
  .get(Url, params)
  .then(data => console.log(data))
  .then(err => console.log(err));
```

`axios` takes one required parameter, and can take a second optional parameter too. This takes some data as a simple query.

**POST:**

```javascript
const Url = "https://jsonplaceholder.typicode.com/posts";
const user = {
  name: "Trey",
  id: 26,
};
axios({
  method: "post",
  url: Url,
  data: {
    user,
  },
})
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

Axios returns a "Promise". A Promise can execute multiple requests. You can do the same thing with axios and run multiple requests at the same time.

```javascript
function getUser() {
  const userUrl = "https://jsonplaceholder.typicode.com/users";
  return axios.get(userUrl);
}

function getPost() {
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  return axios.get(postUrl);
}

axios
  .all([getUser(), getPost()])
  .then((users, posts) => {
    console.log(users);
    console.log(posts);
  })
  .catch(err => console.log(err));
```

## Angular HttpClient

Angular has its own HTTP module that works with Angular apps. It uses the RxJS library to handle asynchronous requests and provides many options to perform the HTTP requests.

#### Making a call to the server using the Angular HttpClient

To make a request using the Angular HttpCient, we have to run our code inside an Angular app. So I created one.

The first thing we need to do is to import `HttpClientModule` in `app.module.ts`

```javascript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Then, we have to create a service to handle the requests. You can easily generate a service using Angular CLI.

`ng g service FetchdataService`

Then, we need to import HttpClient in `fetchdataService.ts` service and inject it inside the constructor.

```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FetchdataService {

  constructor(private http:HttpClient) { }

  getData(url:string){
    return this.http.get(url)
  }

}
```

And in `app.component.ts` import `fetchdataService`

```javascript
import { FetchdataService } from "./fetchdata.service";
```

Finally, call the service and run it.

`app.component.ts`:

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FetchdataService]
})
export class AppComponent implements OnInit{
  posts;
  Url = "https://jsonplaceholder.typicode.com/posts"

  // inject HttpClient
  constructor(private srv: FetchdataService) { }

  getPosts() : void {
    this.srv.getData(this.Url)
      .subscribe(data => console.log(data))
  }

  ngOnInit(){
    this.getPosts()
  }
}
```
