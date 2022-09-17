const route = require("express").Router();
const auth = require("../middlewares/auth");
const controllers = require("../controllers/expenditure");

route.get("/", auth, controllers.getExpenditure);
route.get("/blood", auth, controllers.getExpendByBlood);
route.post("/", auth, controllers.createExpenditure);

module.exports = route;
