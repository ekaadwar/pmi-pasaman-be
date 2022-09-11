const connection = require("../helpers/database");
const table = "users";

exports.createUsers = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (name, email, phone, password) VALUES (?,?,?,?)`,
    [data.name, data.email, data.phone, data.password],
    cb
  );
};
