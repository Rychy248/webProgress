
const express = require('express');

const app = express();
const port = 3000;

// the method get, of express, allows us to specify what is the action for an cotact from the browsers
// app.get("the route",(req,res)=>{})

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1><h1>I'm Rychy, from back-end</h1>");
});
app.get('/contact', (req, res) => {
    res.send("<h1>Contact me at:</h1> <p>jorgeajrha@gmail.com</p>");
});
app.get('/about', (req, res) => {
    res.send("<h1>About me:</h1> <p>Hi there i'm a programer</p>");
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});