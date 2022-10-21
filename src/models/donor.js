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
    `SELECT ${table}.id, user.nama, ${table}.gol_darah, ${table}.lokasi, ${table}.created_at FROM ${table} LEFT JOIN user ON ${table}.id_user = user.id WHERE id_user=${id} AND status = "active"`,
    cb
  );
};

exports.getMyDonor = (id, cb) => {
  connection.query(
    `SELECT ${table}.id, ${table}.lokasi, ${table}.created_at FROM ${table} LEFT JOIN user ON ${table}.id_user = user.id WHERE id_user=${id}`,
    cb
  );
};

exports.getDonorData = (condition, cb) => {
  connection.query(
    `SELECT ${table}.id, user.nama, ${table}.gol_darah, ${table}.lokasi, ${table}.created_at FROM ${table} 
    LEFT JOIN user ON ${table}.id_user = user.id 
    WHERE status = "active"
    LIMIT ? OFFSET ?`,
    [condition.limit, condition.offset],
    cb
  );
};

// delete

exports.deleteDonorHistory = (id, cb) => {
  connection.query(`UPDATE ${table} SET status="inactive" WHERE id=${id}`, cb);
};
