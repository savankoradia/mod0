var mongoose = require("mongoose");
var schema = mongoose.Schema;
var userSchema = new schema({
	name: String,
	location: String,
	created_at: Date,
	updated_at: Date
});
var User = mongoose.model("User", userSchema);
module.exports = User;