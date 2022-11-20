const connection = require("../helpers/database");
const table = "forgot_password";

// ----- create -----

exports.addData = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (id_user, token) 
        VALUES (?,?) `,
    [data.id, data.token],
    cb
  );
};

// ----- read -----

exports.getDataByIdUser = (id, cb) => {
  connection.query(`SELECT id FROM ${table} WHERE id_user=${id}`, cb);
};

exports.getDataByToken = (token, cb) => {
  connection.query(
    `SELECT id, id_user, token FROM ${table} WHERE token='${token}'`,
    cb
  );
};

// ----- update -----

exports.resetPasswordLink = () => {
  console.log("reset password link");
};

exports.updatePassword = (data, cb) => {
  connection.query(
    `UPDATE detail_user SET password=? WHERE id_user=?`,
    [data.password, data.id],
    cb
  );
};

// ----- delete -----

exports.deleteDataById = (id, cb) => {
  connection.query(`DELETE FROM ${table} WHERE id=${id}`, cb);
};
