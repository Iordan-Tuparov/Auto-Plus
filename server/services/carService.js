const Car = require("../models/carModel");

exports.create = (carData) => Car.create(carData);

exports.getAll = () => Car.find();

exports.getOne = (carId) => Car.findById(carId);
