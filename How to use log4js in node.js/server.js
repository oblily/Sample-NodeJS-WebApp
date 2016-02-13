var http = require('http');
var logging = require('./logging');

//set web server
function start(){
http.createServer(function (request, response) {

    logging.logTrace("system","System: Trace Message");
    logging.logDebug("system","System: Debug Message");
    logging.logInfo("system","System: Info Message");
    logging.logError("system","System: Error Message");
    logging.logFatal("system","System: Fatal Message");
    
    logging.logTrace("request","Request: Trace Message");
    logging.logDebug("request","Request: Debug Message");
    logging.logInfo("request","Request: Info Message");
    logging.logError("request","Request: Error Message");
    logging.logFatal("request","Request: Fatal Message");
    
    logging.logTrace("action","Action: Trace Message");
    logging.logDebug("action","Action: Debug Message");
    logging.logInfo("action","Action: Info Message");
    logging.logError("action","Action: Error Message");
    logging.logFatal("action","Action: Fatal Message");
    
    logging.logTrace("error","Error: Trace Message");
    logging.logDebug("error","Error: Debug Message");
    logging.logInfo("error","Error: Info Message");
    logging.logError("error","Error: Error Message");
    logging.logFatal("error","Error: Fatal Message");
    
	// send http head
	// HTTP status: 200 : OK
	// type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// response "Hello World"
	response.end('index.js ref server.js\n');
}).listen(8888);}

exports.start = start;