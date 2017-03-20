var routes = require("./routes");
var methods = require("./methods");
exports.init = function(express, app, settings){
    var routeObjects = routes.initRoutes(app, settings.modules);
    methods.set(routeObjects, settings);
    for (var routeKey in routeObjects) {
        var routeData = routeObjects[routeKey];
        app[routeData.method](routeKey, methods.executeMethod);
    }
};