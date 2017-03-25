// Module dependencies.
var express = require("express"),
	http    = require("http"),
	path    = require("path"),
	session = require('express-session');
var app     = express();

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
GLOBAL.settings = settings;
GLOBAL.rootDir = path.resolve(__dirname);

var engine = require("./core/engine");
engine.init(express, app, settings);

engine.up(http, app, settings);
