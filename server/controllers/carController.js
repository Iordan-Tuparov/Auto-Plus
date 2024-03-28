const router = require("express").Router();

const { default: mongoose } = require("mongoose");
const carService = require("../services/carService");

router.post("/create", async (req, res) => {
    try {
        const carData = {
            _id: new mongoose.Types.ObjectId(),
            ...req.body,
            _owner: req.user._id,
        };

        const createdCar = await carService.create(carData);

        res.status(200).json(createdCar);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get("/all-cars", async (req, res) => {
    try {
        const allCars = await carService.getAll();

        res.status(200).json(allCars);
    } catch (error) {
        res.status(404);
    }
});

router.get("/get-one/:id", async (req, res) => {
    try {
        const currentCar = await carService.getOne(req.params.id);

        res.status(200).json(currentCar);
    } catch (error) {
        res.status(404);
    }
});

router.delete("/delete-car/:id", async (req, res) => {
    try {
        const deletedCar = await carService.deleteCar(req.params.id);

        res.status(200).json(deletedCar);
    } catch (error) {
        res.status(500);
    }
});

router.put("/update-car/:id", async (req, res) => {
    try {
        const carId = req.params.id;
        const carData = req.body;

        const updatedCar = await carService.updateCar(carId, carData);

        res.status(200).json(updatedCar);
    } catch (error) {
        res.status(500);
    }
});

router.put("/like-car/:id", async (req, res) => {
    const carId = req.params.id;
    const userId = req.user._id;

    const likedCar = await carService.likeCar(carId, userId);

    res.json(likedCar);
});

router.get("/most-liked-cars", async (req, res) => {
    const cars = await carService.mostLikedCars();

    res.status(200).json(cars);
});

module.exports = router;
