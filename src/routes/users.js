const route = require("express").Router();
const {
  addUser,
  deleteUser,
  getProfile,
  getUsers,
  getUserById,
  updateProfilePart,
  updateUserById,
  updateDetailUser,
  updateIdUserDetail,
  updatePassword,
  updatePasswordConfirm,
} = require("../controllers/users");
const auth = require("../middlewares/auth");

route.get("/", auth, getUsers);
route.get("/profile", auth, getProfile);
route.get("/:id", auth, getUserById);
route.post("/", auth, addUser);
route.post("/update_password", auth, updatePassword);
route.patch("/update_password", auth, updatePasswordConfirm);
route.patch("/", auth, updateProfilePart);
route.patch("/delete/:id", auth, deleteUser);
route.patch("/update_detail_user", auth, updateDetailUser); //development
route.patch("/update_id_user_detail", auth, updateIdUserDetail); //development
route.patch("/:id", auth, updateUserById);

module.exports = route;
