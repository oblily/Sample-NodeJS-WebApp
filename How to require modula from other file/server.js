var http = require('http');

//set web server
function start(){
http.createServer(function (request, response) {

	// send http head
	// HTTP status: 200 : OK
	// type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// response "Hello World"
	response.end('index.js ref server.js\n');
}).listen(8888);}

// put out message
console.log('Server running at http://127.0.0.1:8888/');

exports.start = start;