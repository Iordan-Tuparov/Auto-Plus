const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    model: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    horsePower: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    information: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    userLikes: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    ],
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Car = mongoose.model("car", carSchema);

module.exports = Car;
