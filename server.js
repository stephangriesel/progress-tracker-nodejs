
fs = require('fs');
readline = require('readline');
// {google} = require('googleapis'),
request = require('request');


const express = require("express");
const hbs = require('hbs');
const path = require('path');

app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Partials
hbs.registerPartials(__dirname + "/views/partials");

// Index page
app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(5000);

console.log("Listening on port 5000")