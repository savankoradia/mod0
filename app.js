// Module dependencies.
var express = require("express"),
	http    = require("http"),
	path    = require("path"),
	session = require('express-session');
var app     = express();
var routeObj = {};
var fs = require('fs');

var settings = require('./core/settings').settings;

// All environments
app.set("port", settings.global.port);
app.set("view engine", settings.theme.viewEngine);
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.errorHandler());
app.use(session({secret:'rtg8458hzs@#$22'})); //change secret

// App routes
function initRoutes () {
	var modules = require("./modules").modules;
	if (modules) {
		modules.forEach(function(module, index){
			try {
				var moduleRoute = require("./" + module + "/router").routes;
				for (var routeKey in moduleRoute) {
					var routeData = moduleRoute[routeKey];
					routeData.module = module;
					routeObj[routeKey] = routeData;
					app[routeData.method](routeKey, executeMethod);
				}
			} catch (e) {
				console.error("Module '" + module + "' doesn't contain any routes.");
			}
		});
	} else {
		console.error("Error: This application doesn't contain any routes.");
	}	
}

/**
* Execute method
*/
function executeMethod (req, res) {
	try {
		var routeData = routeObj[req.route.path];
		var controllerFile = path.resolve("./" + routeData.module + "/controller/" + routeData.execute.controller);
		var methodName = routeData.execute.action;
		var controller = require(controllerFile);
		var responseObject = controller[methodName](req, res);
		if (routeData.view) {
			var renderFile = path.resolve("./themes/" + settings.theme.themeName + "/" + routeData.module + "/view/" + routeData.view);
			fs.access(renderFile, function (err) {
				if (err) {
					renderFile = path.resolve("./" + routeData.module + "/view/" + routeData.view);
				}
				res.render(renderFile, responseObject);
			});
		} else {
			res.send(responseObject);
		}
	} catch (e) {
		console.log("Error:", e.message);
		res.send("Error"); //you can set any variable to display default error.
	}
}

initRoutes();

// Run server
http.createServer(app).listen(app.get("port"), function() {
	console.log(settings.global.serverName + " server listening on port " + app.get("port"));
});
