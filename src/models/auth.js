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

// ----- update -----

// ----- delete -----

exports.deleteDataById = (id, cb) => {
  connection.query(`DELETE FROM ${table} WHERE id=${id}`, cb);
};
