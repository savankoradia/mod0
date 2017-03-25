exports.execute = function(eventType, req, res, other){
    var hooks = GLOBAL.settings.hooks;
    for (var hookKey in hooks) {
        var hook = require(hooks[hookKey]);
        if (hook[eventType] != "undefined") {
            hook[eventType](req,res, other);
        }
    }
};