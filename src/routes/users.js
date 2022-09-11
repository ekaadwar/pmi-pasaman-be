const route = require("express").Router();
const { getUsers } = require("../controllers/users");
const auth = require("../middlewares/auth");

route.get("/", auth, getUsers);

module.exports = route;
