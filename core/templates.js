var path = require("path");
var fs = require('fs');

/**
 * Get template path
 * @param routeData
 * @param callback
 */
exports.getTemplate = function(settingsData, routeData, callback){
    var overloadingFile = path.resolve("./templates/" + settingsData.theme.themeName + "/" + routeData.module + "/view/" + routeData.view);
    var moduleFile = path.resolve("./modules/" + routeData.module + "/view/" + routeData.view);

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
};