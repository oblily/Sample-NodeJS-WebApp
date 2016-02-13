var http = require("http");
var url = require("url");

//set web server
function start(route, handle){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for "+ pathname +" received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

// put out message
console.log('Server running at http://127.0.0.1:8888/');

exports.start = start;