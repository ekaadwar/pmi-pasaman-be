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

exports.getStock = (bloodGroup, cb) => {
  connection.query(
    `SELECT id, gol_darah, masuk, keluar, total FROM ${table} WHERE gol_darah="O"`,
    [bloodGroup],
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

// exports.updateStock = (bloodGroup, cb) => {
//     connection.query(
//         `UPDATE ${table} SET `
//     )
// }
