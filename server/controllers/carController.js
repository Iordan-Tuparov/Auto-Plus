const router = require("express").Router();

const carService = require("../services/carService");

router.post("/create", async (req, res) => {
    try {
        const carData = { ...req.body, _owner: req.user._id };

        const createdCar = await carService.create(carData);

        res.status(200).json(createdCar);
    } catch (error) {
        res.status(400);
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

module.exports = router;
