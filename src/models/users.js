const connection = require("../helpers/database");
const table = "user";
const joinTable1 = "detail_user";

exports.createUsers = (data, cb) => {
  connection.query(
    `INSERT INTO user (nama, email, password, no_hp) VALUES (?, ?, ?, ?)`,
    [data.nama, data.email, data.password, data.no_hp],
    cb
  );
};

exports.createDetailUsers = (data, cb) => {
  connection.query(
    `INSERT INTO detail_user (email, password) VALUES(?,?)`,
    [data.email, data.password],
    cb
  );
};

exports.getUserByEmail = (email, cb) => {
  connection.query(
    `
      SELECT ${table}.id, ${table}.nama, detail_user.email, detail_user.password, detail_user.role 
      FROM ${table} LEFT JOIN detail_user
      ON ${table}.id = detail_user.id
      WHERE detail_user.email=?
    `,
    [email],
    cb
  );
};

exports.getUserByCond = (cond, cb) => {
  const orderBy = Object.keys(cond.sort)[0];
  const sort = cond.sort[orderBy];
  connection.query(
    `
  SELECT ${table}.id, ${table}.nama, detail_user.email, ${table}.no_hp, ${table}.alamat, ${table}.pekerjaan, ${table}.umur, ${table}.jenis_kelamin, ${table}.gol_darah
  FROM ${table} 
  LEFT JOIN detail_user ON ${table}.id = detail_user.id
  WHERE ${table}.nama LIKE '%${cond.search}%' 
  ORDER BY ${table}.${orderBy} ${sort}
  LIMIT ? OFFSET ?`,
    [cond.limit, cond.offset],
    cb
  );
};

exports.getTotalUser = (cond, cb) => {
  connection.query(
    `SELECT COUNT (${table}.id) as count FROM ${table} WHERE ${table}.nama LIKE '%${cond.search}%'`,
    cb
  );
};

exports.getUserById = (id, cb) => {
  console.log(id);
  connection.query(
    `
      SELECT ${table}.id, detail_user.foto, ${table}.nama, detail_user.email, ${table}.no_hp, ${table}.alamat, ${table}.pekerjaan, ${table}.umur, ${table}.jenis_kelamin, ${table}.gol_darah 
      FROM ${table} LEFT JOIN detail_user
      ON ${table}.id = detail_user.id
      WHERE ${table}.id=${id}
    `,
    cb
  );
};

exports.addUser = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (foto, nama, email, no_hp, password, alamat, pekerjaan, umur, jenis_kelamin, gol_darah ) VALUES(?, ?, ?, ?, ?,?,?,?,?,?)`,
    [
      data.foto,
      data.nama,
      data.email,
      data.no_hp,
      data.password,
      data.alamat,
      data.pekerjaan,
      data.umur,
      data.jenis_kelamin,
      data.gol_darah,
    ],
    cb
  );
};

exports.updateProfilePart = (data, cb) => {
  const sql = `UPDATE ${table} SET ${data.col}='${data.val}' WHERE id=${data.id}`;
  connection.query(sql, cb);
};

exports.getUser = (cb) => {
  connection.query("SELECT id, email FROM user", cb);
};

exports.updateDetailUser = (data, cb) => {
  connection.query(
    `UPDATE detail_user SET id = ?, email = ? WHERE id=?`,
    [data.id, data.email, data.id],
    cb
  );
};
