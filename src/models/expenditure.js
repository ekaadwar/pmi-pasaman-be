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

exports.getExpenditure = (condition, cb) => {
  connection.query(
    `SELECT id, gol_darah, jumlah, penerima, created_at FROM ${table} 
    WHERE status = "active"
    LIMIT ? OFFSET ?`,
    [condition.limit, condition.offset],
    cb
  );
};

exports.getExpendByBlood = (blood, cb) => {
  connection.query(
    `SELECT id, gol_darah, jumlah, penerima, created_at FROM ${table} WHERE gol_darah = ? AND status = 'active`,
    [blood],
    cb
  );
};

exports.getExpendTotal = (cb) => {
  connection.query(
    `SELECT COUNT(${table}.id) as count FROM ${table} WHERE ${table}.status = "active"`,
    cb
  );
};

// ----- update -----

// ----- delete -----

exports.deleteExpenditureHistory = (id, cb) => {
  connection.query(`UPDATE ${table} SET status="inactive" WHERE id=${id}`, cb);
};
