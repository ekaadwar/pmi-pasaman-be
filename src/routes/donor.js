const route = require("express").Router();
const donorController = require("../controllers/donor");
const auth = require("../middlewares/auth");

route.patch("/", auth, donorController.addDonor);

module.exports = route;
