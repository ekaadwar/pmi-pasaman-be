const connection = require("../helpers/database");
const table = "stok_darah";

// ----- create -----

exports.addBloodGroup = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (gol_darah, masuk, keluar, total) VALUES ("${data}",0,0,0)`,
    cb
  );
};

// ----- read -----

exports.getStock = (cb) => {
  connection.query(
    `
      SELECT id, gol_darah, masuk, keluar, total
      FROM ${table}
      WHERE status = 'active'
      ORDER BY gol_darah ASC
    `,
    cb
  );
};

exports.getStockByBlood = (bloodGroup, cb) => {
  connection.query(
    `SELECT id, gol_darah, masuk, keluar, total FROM ${table} WHERE gol_darah="${bloodGroup}"`,
    cb
  );
};

// ----- update -----

exports.updateStock = (data, cb) => {
  connection.query(
    `UPDATE ${table} SET masuk=?, keluar=?, total=? WHERE id=? `,
    [data.income, data.expenditure, data.total, data.id],
    cb
  );
};

exports.updateStockByBlood = (data, cb) => {
  connection.query(
    `UPDATE ${table} SET masuk=?, keluar=?, total=? WHERE gol_darah=? `,
    [data.income, data.expenditure, data.total, data.bloodGroup],
    cb
  );
};

// ----- delete -----

exports.deleteBloodGroup = (id, cb) => {
  connection.query(`UPDATE ${table} SET status="deleted" WHERE id=${id}`, cb);
};
