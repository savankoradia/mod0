var routes = require("./routes");
var methods = require("./methods");
var database = require("./database");
exports.init = function(express, app, settings){
    var routeObjects = routes.initRoutes(app, settings.modules);
    methods.set(routeObjects, settings);
    for (var routeKey in routeObjects) {
        var routeData = routeObjects[routeKey];
        app[routeData.method](routeKey, methods.executeMethod);
    }
};

exports.up = function(http, app, settings){
    http.createServer(app).listen(app.get("port"), function() {
        if (settings.global.displayServerConsole) {
            console.log(settings.global.serverName + " server listening on port " + app.get("port"));
        }
    });
};

database.connection(settings);
database.generateModels();