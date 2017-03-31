var mongoose = require("mongoose");
var schema = mongoose.Schema;
var newsSchema = new schema({
	name: String,
	location: String,
	created_at: Date,
	updated_at: Date
});
var News = mongoose.model("News", newsSchema);
module.exports = News;