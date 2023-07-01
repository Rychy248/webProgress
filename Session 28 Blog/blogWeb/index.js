//jshint esversion:6


// --------------------- IMPORTING ---------------------
var path = require('path');

// Third part modules 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// Local modules
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

const app = express();

// MIDLEWARE
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,"public")));


// GLOBAL VARIABLES
let posts = [{
    title:"Day 1",
    content:"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.",
  },{
    title:"Day 2",
    content:"Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.",
  }];


// IMPORT ROUNTING
const { homeRout } = require("./routerHome");
const { capitalizeWord, getMatch, truncatePosts } = require("./tools");

app.use("/", homeRout);
// app.get("/about",(req,res)=>{ res.render("about",{aboutContent:aboutContent}); });
// app.get("/contact",(req,res)=>{ res.render("contact",{contactContent:contactContent}); });
  
app.get("/",(req,res)=>{  
  res.render("home",{homeStartingContent:homeStartingContent, posts:truncatePosts(posts)});
});


app.get("/compose",(req,res)=>{
  console.log(req.params.postId)
  res.render("compose");
});

app.post("/compose",(req,res)=>{
  posts.push({
    title:capitalizeWord(req.body.title),
    content:req.body.body,
    });
    
    res.redirect("/")
});
  
app.get("/posts/:postName",(req,res)=>{
  let match = getMatch(posts,capitalizeWord(req.params.postName));
  
  if (match.matchedFlag) {
    res.render("post",{post:posts[match.index]})
  } else {
    console.log("Matched didn't found");
    res.render("postNotFound",{postSearched:capitalizeWord(req.params.postName)});
  };

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

