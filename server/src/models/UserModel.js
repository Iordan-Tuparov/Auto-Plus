const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    repeatPassword: {
        type: String,
    },
});

const User = mongoose.model("user", UserModel);

module.exports = User;
