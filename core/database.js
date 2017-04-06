var dbConfig = require("./../settings/db").db;
var mongoose = require("mongoose");
var settingsData = {};
var fs = require('fs');
var path = require('path');

exports.connection = function (settings) {
	settingsData = settings;
	var credentialString = dbConfig.username + ":" + dbConfig.password;
	var connectionString = "mongodb://";
	if (credentialString.length > 2) {
		connectionString += credentialString + "@";
	}
	connectionString += dbConfig.host + ":" + dbConfig.port + "/" + dbConfig.database;

	GLOBAL.DB = mongoose.connect(connectionString);
};

exports.generateModels = function(){
	if (GLOBAL.DB && settingsData.modules) {
		GLOBAL['model'] = [];
		settingsData.modules.forEach(function(module){
			try {
				var moduleDir = path.resolve("./modules/" + module + "/model/");
				fs.readdir(moduleDir, function(err, files) {
					if (files) {
						files.forEach(function (modelName){
							var modelKey = modelName.split(".")[0];
							var modelObject = require(path.resolve(moduleDir + "/" + modelName));
							GLOBAL['model'][modelKey] = modelObject;
						});
					}
				});
			}catch (e) {
				 console.log("Error", e);
			}
		});
	}
};