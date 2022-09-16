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
