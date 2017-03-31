var mongoose = require("mongoose");
var schema = mongoose.Schema;
var newsSchema = new schema({
	title: String,
	details: String,
	created_at: Date,
	modified_at: Date
});
var News = mongoose.model("News", newsSchema);
module.exports = News;