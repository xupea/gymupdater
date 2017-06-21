var http = require('http');
var moment= require('moment');

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

moment.locale('zh-cn');

var wilddog = require('wilddog');
var config = {
  authDomain: "gympro2017.wilddog.com",
  syncURL: "https://gympro2017.wilddogio.com"
};
wilddog.initializeApp(config);

var ref = wilddog.sync().ref('baoan-stadium-tennis-court1/today');

var available = false;

setInterval(function() {
  http.get('https://gymupdater.herokuapp.com/');
}, 300000);

setInterval(function() {
  available = !available;
  ref.update({
    '7': available
  });
}, 5000);