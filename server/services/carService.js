const Car = require("../models/carModel");

exports.create = (carData) => Car.create(carData);

exports.getAll = () => Car.find();

exports.getOne = (carId) => Car.findById(carId);

exports.deleteCar = (carId) => Car.findByIdAndDelete(carId);

exports.updateCar = (carId, carData) =>
    Car.findByIdAndUpdate(carId, carData, { runValidators: true });

exports.likeCar = async (carId, userId) => {
    const car = await Car.findById(carId);

    car.userLikes.push(userId);

    car.save();

    return car;
};

exports.mostLikedCars = () =>
    Car.find().sort({ "userLikes.length": -1 }).limit(3);

exports.getUserLiked = (userId) => Car.find({ userLikes: userId });

exports.addComment = async (text, creatorEmail, carId, ownerId) => {
    const car = await Car.findById(carId);

    car.comments.push({ text, creatorEmail, _owner: ownerId });

    await car.save();

    return car;
};

exports.deleteComment = async (commentId, carId) => {
    const car = await Car.findById(carId);

    car.comments = car.comments.filter((x) => x._id != commentId);

    await car.save();

    return car;
};
