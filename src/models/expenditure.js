const connection = require("../helpers/database");
const table = "pengeluaran";

// ----- create -----

exports.createExpenditure = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (gol_darah, jumlah, penerima) VALUES (?,?,?)`,
    [data.bloodGroup, data.amount, data.receiver],
    cb
  );
};

// ----- read -----

exports.getExpenditure = (cb) => {
  connection.query(
    `SELECT id, gol_darah, jumlah, penerima, created_at FROM ${table}`,
    cb
  );
};

exports.getExpendByBlood = (blood, cb) => {
  connection.query(
    `SELECT id, gol_darah, jumlah, penerima, created_at FROM ${table} WHERE gol_darah = ?`,
    [blood],
    cb
  );
};

// ----- update -----

// ----- delete -----
