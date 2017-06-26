var express = require('express');
var path = require('path');
var http = require('http');
var app = express();
var server = http.createServer(app);

var iPort = 2017;

// all resources
app.get('/\*', function (req, res) {
	res.sendFile(path.join(__dirname, 'www/', req.path));
});

server.listen(iPort, function () {
	console.log('UI5con 2017 listening on localhost port ' + iPort);
});
