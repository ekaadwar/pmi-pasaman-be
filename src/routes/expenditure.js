const route = require("express").Router();
const auth = require("../middlewares/auth");
const controllers = require("../controllers/expenditure");

route.post("/", auth, controllers.createExpenditure);

module.exports = route;
