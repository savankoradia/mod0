var themeSettings = require("./../settings/theme").settings;
var globalSettings = require("./../settings/global").settings;
var modules = require("./../settings/modules").modules;
var path = require("path");

var publicDir = "./public/";
var themeDir = "./themes/" + themeSettings.themeName + "/";
exports.settings = {
    theme: themeSettings,
    global: globalSettings,
    modules: modules,
    paths: {
        theme: {
            dir: getPath(themeDir),
            template: getPath(themeDir + "templates"),
            js: getPath(themeDir + "javascripts"),
            css: getPath(themeDir + "stylesheets"),
            images: getPath(themeDir + "images")
        },
        public: {
            dir: getPath(publicDir),
            js: getPath(publicDir + "javascripts"),
            css: getPath(publicDir + "stylesheets"),
            images: getPath(publicDir + "images")
        }
    }
};

function getPath(relativePath){
    return path.resolve(relativePath);
}