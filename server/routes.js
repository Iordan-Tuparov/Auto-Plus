const router = require("express").Router();

const authController = require("../server/controllers/authController");

router.use("/auth", authController);

module.exports = router;
