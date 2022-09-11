require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

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

const routeAuth = require("./src/routes/auth");
app.use("/auth", routeAuth);

app.listen(port, () => {
  console.log("App is running in port 8080");
});
