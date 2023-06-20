# Modularizing `nodejs` applications ~ Manifest routes

We assume most of the system components to be accessible for testability. However, that is challenging when routes are a little bit complex. To reduce the complexity that comes with working on large-scale `expressjs` routes, we will apply a technique known as _manifest routes_ to make route declarations change proof, making them more stable as the rest of the application evolves.

***In this article we will talk about:***

- The need to have manifest routes technique 
- How to apply the manifest routes as a modularization technique

> Even though this blog post was designed to offer complementary materials to those who bought my **_[Testing `nodejs` Applications book](https://bit.ly/2ZFJytb)_**, the content can help any software developer to tuneup working environment. **_[You use this link to buy the book](https://bit.ly/2ZFJytb)_**.  [![Testing nodejs Applications Book Cover](https://snap.as/a/42OS2vs.png)](https://bit.ly/2ZFJytb)

## Show me the code

```JavaScript  
var express = require('express')
var app = express();

app.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' });
});

/** code that initialize everything, then comes this route*/
app.get('/users/:id', function(req, res, next){
  User.findById(req.params.id, function(error, user){
    if(error) return next(error);
    return res.status(200).json(user);
  });
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
});

```

## What can possibly go wrong?

When trying to figure out how to approach modularization of `expressjs` routes with a manifest route pattern, the following points may be a challenge:

- Where to start with modularization without breaking the rest of the application
- How to introduce the layered architecture, without incurring additional test burden, but making it easier to isolate tests

The following sections will explore more on making points stated above work. 

## The need to have manifest routes technique

There is a subtle nuance that is missing when following traditional approaches to modularization. 

When adding an `index` file, as a part of the modularization process, exporting the content of directories, for that matter -- sub-directories, does not result in exporting routes that can be plugged into existing `expressjs` applications. 

The remedy is to create, isolate, export, and manifest them to the outer world.   

## How to apply the manifest routes handlers for reusability

The handlers are a beast in their own way. 

A collection of related route handlers can be used as a baseline to create the controller layer. The modularization of this newly created/revealed layer can be achieved in two steps as was the case for other use cases. The first step consists of naming, ejecting, and exporting single functions as modules. The second step consists of adding an `index` to every directory and exporting the content of the directory.

## Manifest routes

In essence, requiring a top-level directory, will seek for `index.js` at top of the directory and make all the route content accessible to the caller. 

```JavaScript
var routes = require('./routes'); 
```
_*Example*: `/routes` has `index.js` at top level directory ~ [source](http://stackoverflow.com/a/5365577/132610)_

A typical default entry point of the application: 

```JavaScript
var express = require('express');  
var router = express.Router();

router.get('/', function(req, res, next) {  
  return res.render('index', { title: 'Express' });
});
module.exports = router;  
```
_*Example*: default `/index` entry point_

Anatomy of a route handler 

```JavaScript
module.exports = function (req, res) {  };
```
_*Example*: `routes/users/get-user|new-user|delete-user.js`_


> *"The most elegant configuration that I've found is to turn the larger routes with lots of sub-routes into a directory instead of a single route file"* - Chev  [source](https://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/)

When individual routes/users sub-directories are put together, the resulting index would look as in the following code sample 

```JavaScript
var router = require('express').Router();  
router.get('/get/:id', require('./get-user.js'));  
router.post('/new', require('./new-user.js'));  
router.post('/delete/:id', require('./delete-user.js'));  
module.exports = router;    
```
_*Example*: `routes/users/index.js`_

Update when `routes/users/favorites/` adds more sub-directories

```JavaScript
router.use('/favorites', require('./favorites')); 
...
module.exports = router;
```
_*Example*: `routes/users/index.js` ~ after adding a new favorites requirement_

We can go extra mile and group route handlers in controllers. Using route and controllers' route handler as a controller would look as in the following example:

```JavaScript
var router = require('express').Router();
var catalogues = require('./controllers/catalogues');

router.route('/catalogues')
  .get(catalogues.getItem)
  .post(catalogues.createItem);
module.exports = router;
```

## Conclusion 

Modularization makes `expressjs` routes reusable, composable, and stable as the rest of the system evolves. Modularization brings elegance to route composition, improved testability, and reduces instances of redundancy. 

In this article, we revisited a technique that improves `expressjs` routes elegance, their testability, and re-usability known under the manifest route moniker. We also re-state that the manifest route technique is an extra mile to modularizing `expressjs` routes. There are additional complimentary materials in the __"Testing `nodejs` applications"__ book. 

## References 

- [Testing `nodejs` Applications book](https://bit.ly/2ZFJytb)
- An Intuitive Way To Organize Your `expressjs` Routes ~ [CodeTunnel](https://codetunnel.io/an-intuitive-way-to-organize-your-expressjs-routes/)

#snippets #modularization #manifest-routes #nodejs #expressjs