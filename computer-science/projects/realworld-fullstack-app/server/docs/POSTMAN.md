# Postman

---

## Getting Familiar with Postman

---

### Requests

---

**Building and Sending API Requests**

Making a request can be just as easy as pasting a URL into your web browser using the user interface for Postman. For a `GET` request, all you have to do is enter a request URL and hit `Send` to fire off the request. The process for building a request varies depending on what kind of request you are trying to make. That being said it is very worthwhile to read the [Postman documentation](https://www.getpostman.com/docs) that goes over all the different parts of the user interface and how they're used in the process of building a request.

You can create and save a request from the:

- Workspaces build view
- New button
- Launch screen

#### Using the New Button

---

1. In the header toolbar, click the **New** button

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-HeaderToolBar-new+button1.png)

The "Create New" screen appears:

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-createNew-white-p2.png)

2. In the SAVE REQUEST screen:

- Enter a title and description for your request
- Select a collection and save the request in it
- Click the **Save** button

After you save the request, you can add the *URL*, *method*, *headers*, and *body* to the request in the builder.

#### Using the Launch screen

---

The "Create New" screen appears by default when you launch Postman. At the bottom of the screen you can select "Show this window at launch" to indicate whether you want the "Create New" screen to display each time you open Postman.

1. Open Postman
2. In the "Create New" screen, click "Request"
3. In the SAVE REQUEST screen:

- Enter a title and description for your request
- Select a collection and save the request in it
- Click the **Save** button

#### Using Workspaces build view

---

In Workspaces, you can [create any kind of HTTP request](https://learning.getpostman.com/docs/v6/postman/launching_postman/sending_the_first_request) quickly. The four parts of an HTTP request are the `URL`, `method`, `headers`, and the `body`. Postman gives you tools to work with each of these parts:

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-workspace-area.png)

#### URL

---

When you enter the request URL in the URL input field, previously-used URLs will show an autocomplete dropdown.

Click the **Params** button to open the [data editor](https://learning.getpostman.com/docs/v6/postman/launching_postman/navigating_postman) for URL parameters. When you add key-value pairs, Postman combines everything in the query string above. If your URL already has parameters - for example, if you are pasting a URL from some other source. Postman splits the URL into pairs automatically.

**Note:** Parameters you enter in the URL bar or in the data editor will not automatically be URL-encoded. Right click a piece of selected text, and select "EncodeURIComponent" to manually encode the parameter value.

**Note:** Postman automatically adds `http://` to the beginning of the URL if no protocol is specified.

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderUrl.png)

Some API endpoints use path variables. You can work with those in Postman. Below is an example of a URL with a path variable:

`https://api.library.com/:entity/`

To edit the path variable, click on **Params** to see it already entered as the key. Update the value as needed. For example, `:entity` can be "user" in this specific case. Postman also gives you suggestions to autocomplete the URL.

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderPath.png)

#### Headers

---

Clicking on the **Headers** tab shows the headers key-value editor. The autocomplete dropdown provides suggestions of common HTTP headers, as you type in the fields. Values for the "Content-Type" header are also available in an auto-complete drop down.

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-headers_white.png)

**Note on restricted headers:** If you're using the Postman Chrome app, some headers are restricted by Chrome and the XMLHttpRequest specification. However, sending restricted headers is simple using the [interceptor extension](https://learning.getpostman.com/docs/v6/postman/sending_api_requests/interceptor_extension).

#### Cookies

---

You can manage Cookies in native apps by using the cookie manager to edit cookies associated with each domain. To open the modal, click the **Cookies** link under the **Send** button. For more information, see [Managing cookies](https://learning.getpostman.com/docs/v6/postman/sending_api_requests/cookies).

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-manage-cookies.png)

#### Header presets

---

You can save commonly used headers together in a header preset. Under the **Headers** tab, you can add a header preset to your request when you select "Manage Presets" from the **Presets** dropdown on the right.

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-header-presets1.png)

#### Method

---

Use the control dropdown to change the request method. The request body editor area changes depending on whether the method can have a body attached to it.

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/WS-method-menu.png)

#### Request Body

---

While constructing requests, you'll work frequently with the request body editor. Postman lets you send almost any kind of HTTP request. The body editor is divided into 4 areas and has different controls, depending on the body type.

**Note about Headers:** When you are sending requests through the HTTP protocol, your server might expect a Content-Type header. The Content-Type header allows the server to parse the body properly. For form-data and urlencoded body types, Postman automatically attaches the correct Content-Type header so you don't have to set it. The raw mode header is set when you select the formatting type. If you manually use a Content-Type header, that value takes precedence over what Postman sets. Postman does not set any header type for the binary body type.

##### Form-data

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderForm.png)

`multipart/form-data` is the default encoding a web form uses to transfer data. This simulates filling a form on a website, and submitting it. The form-data editor lets you set key-value pairs (using the [data editor](https://learning.getpostman.com/docs/v6/postman/launching_postman/navigating_postman) for your data. You can attach files to a key as well.

**Note:** due to restrictions of the HTML 5 spec, files are not stored in history or collections. You will need to select the file again the next time you send the request.

Uploading multiple files each with their own Content-Type is not supported yet.

##### Urlencoded

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/requestBuilderUrlEncoded.png)

This encoding is the same as the one used in URL parameters. You just need to enter key-value pairs and Postman will encode the keys and values properly. Note that you cannot upload files through this encoding mode. There might be some confusion between form-data and urlencoded so make sure to check with your API first.

##### Raw

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58960775.png)

A raw request can contain anything. Postman doesn't touch the string entered in the raw editor except replacing [environment variables](). Whatever you put in the text area gets sent with the request. The raw editor lets your set the formatting type along with the correct header that you should send with the raw body. You can set the Content-Type header manually too and this will override the Postman defined setting. Selecting XML/JSON in the editor type enables syntax highlighting for your request body and also sets the Content-Type header.

**Tip:** Selecting text in the editor and pressing CMD/**CTRL + B** can beautify the XML/JSON content automatically.

##### Binary

![image](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/58960827.png)

Binary data allows you to send things which you can not enter in Postman, for example, image, audio, or video files. You can send text files as well. As mentioned earlier in the form-data section, you would have to reattach a file if you are loading a request through the history or the collection.

---

#### Prerequisites

---

[Installation and updates](https://learning.getpostman.com/docs/postman/launching_postman/installation_and_updates)

#### Additional Resources

---

**Case Studies**

[Shopify](https://www.getpostman.com/case-studies/Shopify.pdf?_ga=2.208882130.1709676723.1555945956-175457764.1541563300)

**Videos**

[Intro to Postman Cloud](https://www.youtube.com/watch?v=ccdxr0oJR-I)

**Related Blog Posts**

[It Starts with a Simple REST Client](http://blog.getpostman.com/2016/10/06/it-starts-with-a-simple-rest-client-2/?_ga=2.208882130.1709676723.1555945956-175457764.1541563300)

[Inspecting Postman Requests](http://blog.getpostman.com/2015/06/13/debugging-postman-requests/?_ga=2.238584256.1709676723.1555945956-175457764.1541563300)

#### Next Steps:

---

[intro to collections](https://learning.getpostman.com/docs/postman/collections/intro_to_collections)
