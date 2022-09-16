const route = require("express").Router();
const donorController = require("../controllers/donor");
const auth = require("../middlewares/auth");

route.get("/", auth, donorController.getDonorData);
route.post("/", auth, donorController.addDonor);

module.exports = route;
