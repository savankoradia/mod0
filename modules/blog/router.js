exports.routes = {
	"/" : {
		view: "blog.ejs",
		method: "get",
		execute: {
			controller: "Blog",
			action: "index"
		}
	}
};