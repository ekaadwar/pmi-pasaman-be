const route = require("express").Router();
const donorController = require("../controllers/donor");
const auth = require("../middlewares/auth");

// route.get();
route.post("/", auth, donorController.addDonor);

module.exports = route;
