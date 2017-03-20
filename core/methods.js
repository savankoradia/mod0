var path = require("path");
var routeObjects = {};
var settingsData = {};
var fs = require('fs');

exports.set = function(routeObj, settings){
    routeObjects = routeObj;
    settingsData = settings;
};

exports.executeMethod = function(req, res){
    try {
        var routeData = routeObjects[req.route.path];
        getController(routeData, function(controllerFile){
            var methodName = routeData.execute.action;
            var controller = require(controllerFile);
            if (typeof controller[methodName] != "undefined") {
                var responseObject = controller[methodName](req, res);
                if (routeData.view) {
                    getTemplate(routeData, function(renderFile){
                        res.render(renderFile, responseObject);
                    });
                } else {
                    res.send(responseObject);
                }
            } else {
                res.send("Action not found");
            }
        });
    } catch (e) {
        console.log("Error:", e.message);
        res.send("Error"); //you can set any variable to display default error.
    }
};

/**
 * Get controller path
 * @param routeData
 * @param callback
 */
function getController(routeData, callback){
    var overloadingFile = path.resolve("./themes/" + settingsData.theme.themeName + "/" + routeData.module + "/controller/" + routeData.execute.controller);
    var moduleFile = path.resolve("./" + routeData.module + "/controller/" + routeData.execute.controller);

    //return module file overloading is disabled
    if (!settingsData.theme.enableOverloading) {
        callback(moduleFile);
    }

    //return overloading file if exists
    fs.access(overloadingFile + ".js", function(err){
        if (err) {
            callback(moduleFile);
        } else {
            callback(overloadingFile);
        }
    });
}

/**
 * Get template path
 * @param routeData
 * @param callback
 */
function getTemplate(routeData, callback){
    var overloadingFile = path.resolve("./themes/" + settingsData.theme.themeName + "/" + routeData.module + "/view/" + routeData.view);
    var moduleFile = path.resolve("./" + routeData.module + "/view/" + routeData.view);

    //return module file overloading is disabled
    if (!settingsData.theme.enableOverloading) {
        callback(moduleFile);
    }

    //return overloading file if exists
    fs.access(overloadingFile, function (err) {
        if (err) {
            callback(moduleFile);
        } else {
            callback(overloadingFile);
        }
    });

}