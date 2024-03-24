const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    carlikes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "car",
        },
    ],
});

userSchema.post("save", function (error, doc, next) {
    if (error.name === "MongoError" && error.code === 11000) {
        next(new Error("Email already existing!"));
    } else {
        next(error);
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
