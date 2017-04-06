exports.call = function(methodName, req, res, callback){
    var parent = require(req.parentFile);
    var resObj = parent[methodName](req, res);
    if (callback) {
        callback(resObj);
    } else {
        return resObj;
    }
};