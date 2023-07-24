# MY FIRST API

## Builided with
- Nodejs
- Express
- MongoDb

This proyect It's part of my 
### [Web Progress, repository](https://github.com/Rychy248/webProgress)

## END POINTS

| HTTP Verbs | /articles |  /articles/articleId|
| ---- | --- | --- |
| GET | Fetches all articles | fetch the article on articleId |
| POST | Post a new article | none|
| PUT | none | Update (replacing) the article on articleId |
PATCH | none | Update (just the part sended) the article on articleId | 
DELETE | Deletes all articles | Delete the article on articleId |

## Set up
### Install de dependecies
``` bash
npm i

``` 
### Set up the service with:

``` bash
    node index.js
    # or, with nodemon
    nodemon index.js
``` 
### CONFIGURE CORS
got to, "./config.js", and add your domains to the array "allowedOrigins":
``` js
// ./config.js

    // line 20
    allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:8080/"];

``` 

# EXAMPLES
The follow examples use fetch js 
## GET /articles
``` js
    fetch("http://localhost:8080/articles", {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log('error: ', error)
    });
``` 

### GET /articles/articleId
``` js
    let id = "64a8562913c339c5d0aa2e0f";
    fetch(`http://localhost:8080/articles/${id}`, {
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(response => response.json())
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log('error: ', error)
    });
```

### POST /articles
``` js
    fetch("http://localhost:8080/articles", {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "title" : "HTTPS",
            "content" : "Hypertext Transfer Protocol Secure (HTTPS) is an extension of the Hypertext Transfer Protocol (HTTP). It uses encryption for secure communication over a computer network, and is widely used on the Internet. In HTTPS, the communication protocol is encrypted using Transport Layer Security (TLS) or, formerly, Secure Sockets Layer (SSL). The protocol is therefore also referred to as HTTP over TLS, or HTTP over SSL. "
        })
    })
    .then(response => response.json())
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log('error: ', error)
    });
``` 

### DELETE  /articles/articleId
``` js
    let id = "64a8586af7969da95fdf3230"; 
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/articles/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
```

### DELETE  /articles
``` js
    let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    fetch("http://localhost:8080/articles", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)
    );
``` 
### PUT  /articles/articleId
``` js
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

let raw = JSON.stringify({
    "title": "HTML 5",
    "content": "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance. "
});

let requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};
let id = "64a85866af7969a95fdf3232";
fetch(`http://localhost:8080/articles/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
``` 
### PATCH  /articles/articleId

``` js
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "title": "HTML 4 MODIFYED",
        "content": "HTML 5 It's content"
    });
    let _ID = "64a8562913c339c5d0aa2e0f";
    let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`http://localhost:8080/articles/${_ID}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
``` 

