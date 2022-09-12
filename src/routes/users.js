const route = require("express").Router();
const {
  addUser,
  getProfile,
  getUsers,
  getUserById,
  updateProfilePart,
  updateUserById,
} = require("../controllers/users");
const auth = require("../middlewares/auth");

route.get("/", auth, getUsers);
route.get("/profile", auth, getProfile);
route.get("/:id", auth, getUserById);
route.post("/", auth, addUser);
route.patch("/", auth, updateProfilePart);
route.patch("/:id", auth, updateUserById);

module.exports = route;
