var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle ={}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"]= requestHandlers.show;

// namify verb handle as parm for easy comprehension 
server.start(router.route, handle);