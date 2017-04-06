var path = require("path");
var routeObjects = {};
var settingsData = {};
var fs = require('fs');
var controllers = require('./controllers');
var templates = require('./templates');

exports.set = function(routeObj, settings){
    routeObjects = routeObj;
    settingsData = settings;
};

exports.executeMethod = function(req, res){
    try {
        var routeData = routeObjects[req.route.path];
        controllers.getController(settingsData, routeData, function(controllerFile, moduleFile){
            var methodName = routeData.execute.action;
            var controller = require(controllerFile);
            if (typeof controller[methodName] != "undefined") {
                req.parentFile = moduleFile;

                controller[methodName](req, res, function(responseObject){
                    if (routeData.view) {
                        templates.getTemplate(settingsData, routeData, function(renderFile){
                            responseObject.paths = settingsData.paths;
                            res.render(renderFile, responseObject);
                        });
                    } else {
                        res.send(responseObject);
                    }
                });
            } else {
                res.send("Action not found");
            }
        });
    } catch (e) {
        console.log("Error:", e.message);
        res.send("Error"); //you can set any variable to display default error.
    }
};