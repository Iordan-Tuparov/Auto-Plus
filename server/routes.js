const router = require("express").Router();

const authController = require("../server/controllers/authController");
const carController = require("../server/controllers/carController");

router.use("/auth", authController);
router.use("/cars", carController);

module.exports = router;
