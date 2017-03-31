var dbConfig = require("./../settings/db").db;
var mongoClient = require('mongodb').MongoClient;

exports.connection = function () {
	var credentialString = dbConfig.username + ":" + dbConfig.password;
	var connectionString = "mongodb://";
	if (credentialString.length > 2) {
		connectionString += credentialString + "@";
	}
	connectionString += dbConfig.host + ":" + dbConfig.port + "/" + dbConfig.database;

	mongoClient.connect(connectionString, function (err, db) {
		if (err) {
			console.log("Error in connection", err);
		} else {
			GLOBAL.Db = db;
		}
	});

};