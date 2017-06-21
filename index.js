var http = require('http');
var moment= require('moment');

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
  http.get('http://www.google.com');
}, 300000);

setInterval(function() {
  available = !available;
  ref.update({
    '7': available
  });
}, 5000);