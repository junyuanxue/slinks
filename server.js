var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser')

var routes = require('./routes/routes.js')(app);


app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

exports = module.exports = app;
