const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    username: { type: String, unique: true },
    password: { type: String, unique: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;