const route = require("express").Router();
const auth = require("../middlewares/auth");
const controllers = require("../controllers/stock");

route.get("/", controllers.getStock);
route.post("/", auth, controllers.addBloodGroup);
route.patch("/", auth, controllers.updateBloodStock);
route.patch("/delete/:id", auth, controllers.deleteBloodGroup);

module.exports = route;
