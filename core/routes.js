path = require("path");
var routeObj = {};
exports.initRoutes = function(app, modules){
    if (modules) {
        modules.forEach(function(module, index){
            try {
                var moduleRoute = require(path.resolve("./" + module + "/router")).routes;
                for (var routeKey in moduleRoute) {
                    var routeData = moduleRoute[routeKey];
                    routeData.module = module;
                    routeObj[routeKey] = routeData;
                    //app[routeData.method](routeKey, function(){});
                }
            } catch (e) {
                console.error("Module '" + module + "' doesn't contain any route.");
            }
        });
    } else {
        console.error("Error: This application doesn't contain any route.");
    }
    return routeObj;
};