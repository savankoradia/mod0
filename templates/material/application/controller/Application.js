var _ = require('underscore');
var parent = require(GLOBAL.rootDir + "/library/parent");

exports.index = function(req, res){
    var parentReturnObject = parent.call("index",req, res);
    var returnObject = {
        _:_,
        pageTitle: "Welcome to Node+Express -- overloaded",
        messageTitle: "Node + Express",
        message: "This open Source modular framework is built up using NodeJS + Express. Aim of this project to ease work of developer and achieve more better performance and stability in no time. :)",
        news: [
            {
                title: "New Apple Launch",
                details: "Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex"
            },
            {
                title: "Badshah masala....",
                details: "Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex"
            }
        ]
    };
    returnObject.news = parentReturnObject.news;
    return returnObject;
};