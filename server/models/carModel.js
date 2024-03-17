const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
        unique: true,
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
    _owner: { type: mongoose.Types.ObjectId, ref: "user" },
});

const Car = mongoose.model("car", carSchema);

module.exports = Car;
