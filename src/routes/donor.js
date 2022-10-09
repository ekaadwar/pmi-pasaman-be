const route = require("express").Router();
const donorController = require("../controllers/donor");
const auth = require("../middlewares/auth");

route.get("/", auth, donorController.getDonorData);
route.get("/my_history", auth, donorController.getMyHistory);
route.get("/:id", auth, donorController.getDonorByIdUser);
route.post("/", auth, donorController.addDonor);
route.patch("/delete/:id", auth, donorController.deleteDonorHistory);

module.exports = route;
