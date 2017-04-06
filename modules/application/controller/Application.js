var _ = require('underscore');
var hook = require(GLOBAL.rootDir + "/library/hook");

exports.index = function(req, res, callback){
    //hook.execute("beforeEnter");

	GLOBAL.model.News.find({}, function(err, newsData){
		var returnObject = {
			_:_,
			pageTitle: "Welcome to Node+Express",
			messageTitle: "Node + Express",
			message: "This open Source modular framework is built up using NodeJS + Express. Aim of this project to ease work of developer and achieve more better performance and stability in no time. :)",
			news: newsData
		};
		callback(returnObject);
	});
};