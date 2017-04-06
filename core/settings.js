var path = require("path");
var fs = require('fs');
var themeSettings = require("./../settings/theme").settings;
var globalSettings = require("./../settings/global").settings;
var modules = require("./../settings/modules").modules;

var publicDir = "./public/";
var themeDir = "./templates/" + themeSettings.themeName + "/";
exports.settings = {
    theme: themeSettings,
    global: globalSettings,
    modules: modules,
    paths: {
        theme: {
            dir: getPath(themeDir),
            js: "/" + themeSettings.themeName + "/javascripts/",
            css: "/" + themeSettings.themeName + "/stylesheets/",
            images: "/" + themeSettings.themeName + "/images/"
        },
        public: {
            dir: getPath(publicDir)
        }
    },
    hooks: getHooks()
};

function getPath(relativePath){
    return path.resolve(relativePath);
}

function getHooks(){
    var hookLists = {};
    if (modules) {
        modules.forEach(function(module, index){
            var hookFile = path.resolve("./modules/" + module + "/hooks");
            try {
                var moduleHooks = require(hookFile).hooks;
                for (var hookName in moduleHooks) {
                    var hookPath = path.resolve("./modules/" + module + "/hooks/" + moduleHooks[hookName]);
                    hookLists[hookName] = hookPath;
                }
            } catch(e) {
            }
        });
    }
    return hookLists;
}