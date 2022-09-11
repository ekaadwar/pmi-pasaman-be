const route = require("express").Router();
const { signup } = require("../controllers/auth");

route.post("/signup", signup);

module.exports = route;
