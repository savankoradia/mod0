exports.routes = {
	"/blog" : {
		view: "blog.ejs",
		method: "get",
		execute: {
			controller: "Blog",
			action: "index"
		}
	}
};