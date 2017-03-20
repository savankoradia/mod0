var _ = require('underscore');
exports.index = function(req, res){
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
    return returnObject;
};