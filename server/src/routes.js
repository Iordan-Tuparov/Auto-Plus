const routes = require("express").Router();

const authController = require("./controllers/authController");
const homeController = require("./controllers/homeController");

routes.use("/auth", authController);
routes.use("/home", homeController);

module.exports = routes;
