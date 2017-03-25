var path = require("path");
var fs = require('fs');

/**
 * Get controller path
 * @param routeData
 * @param callback
 */
exports.getController = function(settingsData, routeData, callback){
    var overloadingFile = path.resolve("./templates/" + settingsData.theme.themeName + "/" + routeData.module + "/controller/" + routeData.execute.controller);
    var moduleFile = path.resolve("./modules/" + routeData.module + "/controller/" + routeData.execute.controller);

    //return module file overloading is disabled
    if (!settingsData.theme.enableOverloading) {
        callback(moduleFile);
    }

    //return overloading file if exists
    fs.access(overloadingFile + ".js", function(err){
        if (err) {
            callback(moduleFile);
        } else {
            callback(overloadingFile, moduleFile);
        }
    });
};
