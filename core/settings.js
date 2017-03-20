var themeSettings = require("./../settings/theme").settings;
var globalSettings = require("./../settings/global").settings;
var modules = require("./../settings/modules").modules;
var path = require("path");

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
    }
};

function getPath(relativePath){
    return path.resolve(relativePath);
}