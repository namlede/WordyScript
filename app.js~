
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var storage = require('node-persist');
var app = express();
var server = require('http').createServer(app)
server.listen(process.env.PORT || 3000);


var io = require('socket.io').listen(server);
storage.initSync();
storage.setItem("bob","hi");
// all environments

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.favicon(path.join(__dirname, 'public/images/icon.png')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
hashCode = function(s){
  var a=s.toString().split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);   
  if(a<0)return(-2*a-1);
  return(2*a);           
}
app.get('/:id', function(req, res) {
  var temp=storage.getItem(req.params.id);
  if(temp){
  res.render('index.ejs',{start:temp});
	}else{
		res.render('index.ejs',{start:"File_Not_Found"});
  	}
});
app.get('/', function(req, res) {
  res.render('index.ejs',{ start : "print (10 times 17)" });
});



io.sockets.on('connection', function (socket) {
  socket.on('url', function (data) {
console.log(hashCode(data.url).toString());
storage.setItem(hashCode(data.url).toString(),data.url);
console.log(storage.getItem(hashCode(data.url).toString()));
  });

});
