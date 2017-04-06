exports.routes = {
    "/" : {
        view: "index.ejs",
        method: "get",
        execute: {
            controller: "Application",
            action: "index"
        }
    }
};