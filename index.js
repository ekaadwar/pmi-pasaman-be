require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routeAuth = require("./src/routes/auth");
const routeUser = require("./src/routes/users");

const { APP_UPLOAD_ROUTE, APP_UPLOAD_PATH } = process.env;
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(APP_UPLOAD_ROUTE, express.static(APP_UPLOAD_PATH));
app.get("/", (_req, res) => {
  const data = {
    success: true,
    message: "Hello World!",
  };
  return res.json(data);
});
app.use("/auth", routeAuth);
app.use("/users", routeUser);

app.listen(port, () => {
  console.log("App is running in port 8080");
});
