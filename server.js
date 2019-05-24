// https://blog.stephsmith.io/tutorial-google-sheets-api-node-js/

const express = require("express");
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const request = require('request');
const hbs = require('hbs');
const path = require('path');
const GoogleSpreadsheet = require('google-spreadsheet');

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

// Test page
app.get('/test', (req, res, next) => {
  res.render('test');
})


// Sheet connection
app.get("/google-spreadsheet", function(req, res){

  // Identifying which document we'll be accessing/reading from
  var doc = new GoogleSpreadsheet('3c6050c8d4ba79fb2f31d69fd9de6954461e12e7');

  // Authentication
  doc.useServiceAccountAuth(creds, function (err) {

    // Getting cells back from tab #2 of the file
    doc.getCells(2, callback)

    // Callback function determining what to do with the information
    function callback(err, rows){

      // Logging the output or error, depending on how the request went
      console.log(rows)
      console.log(err)

      // Rending the test page while passing in the response data through "rows". Can access specific data points via: rows[i]._value
      res.render('test', {rows:rows})
    }
    });
  });

app.listen(5000);

console.log("Listening on port 5000")