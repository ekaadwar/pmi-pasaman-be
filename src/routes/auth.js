const route = require("express").Router();
const {
  forgotPassword,
  resetPassword,
  signin,
  signup,
} = require("../controllers/auth");

route.post("/signup", signup);
route.post("/signin", signin);
route.put("/forgotpassword", forgotPassword);
// route.patch("/resetpassword/:token", resetPassword);
route.patch("/resetpassword/:token", resetPassword);

module.exports = route;
