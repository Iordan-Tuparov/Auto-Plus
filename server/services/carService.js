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
