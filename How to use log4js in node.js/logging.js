var log4js = require('log4js');

log4js.configure('log4js_setting.json');

function logTrace(subject,msg){
  var logger = log4js.getLogger(subject);
  logger.trace(msg);
}
function logDebug(subject,msg){
  var logger = log4js.getLogger(subject);
  logger.debug(msg);
}
function logInfo(subject,msg){
  var logger = log4js.getLogger(subject);
  logger.info(msg);
}
function logWarn(subject,msg){
  var logger = log4js.getLogger(subject);
  logger.warn(msg);
}
function logError(subject,msg){
  var logger = log4js.getLogger(subject);
  logger.error(msg);
}
function logFatal(subject,msg){
  var logger = log4js.getLogger(subject);
  logger.fatal(msg);
}

exports.logTrace = logTrace;
exports.logDebug = logDebug;
exports.logInfo = logInfo;
exports.logWarn = logWarn;
exports.logError = logError;
exports.logFatal = logFatal;