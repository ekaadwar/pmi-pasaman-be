const connection = require("../helpers/database");
const table = "user_donor";

// ----- create -----

exports.addDonor = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (id_user, gol_darah, lokasi) VALUES (?,?,?)`,
    [data.id, data.golDarah, data.location],
    cb
  );
};

// ----- read -----

exports.getDonorByIdUser = (id, cb) => {
  connection.query(
    `SELECT ${table}.id, user.nama, ${table}.gol_darah, ${table}.lokasi, ${table}.created_at FROM ${table} LEFT JOIN user ON ${table}.id_user = user.id WHERE id_user=${id}`,
    cb
  );
};

exports.getDonorData = (cb) => {
  connection.query(
    `SELECT ${table}.id, user.nama, ${table}.gol_darah, ${table}.lokasi, ${table}.created_at FROM ${table} LEFT JOIN user ON ${table}.id_user = user.id`,
    cb
  );
};
