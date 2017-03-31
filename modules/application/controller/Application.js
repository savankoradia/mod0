var _ = require('underscore');
var hook = require(GLOBAL.rootDir + "/library/hook");
//var User = require("./../model/User");
exports.index = function(req, res){
    //hook.execute("beforeEnter");
    var returnObject = {
        _:_,
        pageTitle: "Welcome to Node+Express",
        messageTitle: "Node + Express",
        message: "This open Source modular framework is built up using NodeJS + Express. Aim of this project to ease work of developer and achieve more better performance and stability in no time. :)",
        news: [
            {
                title: "Lorem ipsum dolor sit amet",
                details: "Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex"
            },
            {
                title: "odonil....",
                details: "Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex"
            }
        ]
    };

    //var newUser = GLOBAL.model.User({
    //    name: "OMG!!!"
    //});
    //
    //newUser.save(function(err){
    //    console.log("Error", err);
	    GLOBAL.model.User.find({}, function(err, users){
            if (err) {
                console.log("Error", err);
            } else {
                console.log("Users", users);
            }
        });
    //});


    return returnObject;
};