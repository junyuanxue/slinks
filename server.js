var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser')

var routes = require('./routes/routes.js')(app);


app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());

app.listen(8080, function () {
  console.log('App listening on port 8080!');
});

exports = module.exports = app;
