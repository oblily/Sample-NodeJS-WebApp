var http = require("http");
var url = require("url");

//set web server
function start(route, handle){
http.createServer(function (request, response) {

    // parse URL
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+ pathname +" received.");
    
    // send http head
	// HTTP status: 200 : OK
	// type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

    var content = route(handle, pathname);
	// response "Hello World"
	response.end(content);
    
}).listen(8888);}

// put out message
console.log('Server running at http://127.0.0.1:8888/');

exports.start = start;