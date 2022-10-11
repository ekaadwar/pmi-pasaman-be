const route = require("express").Router();
const auth = require("../middlewares/auth");
const controllers = require("../controllers/stock");

route.get("/", controllers.getStock);
route.post("/", auth, controllers.addBloodGroup);

module.exports = route;
