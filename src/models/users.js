const connection = require("../helpers/database");
const table = "user";

exports.createUsers = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (nama, email, no_hp, password) VALUES (?,?,?,?)`,
    [data.nama, data.email, data.no_hp, data.password],
    cb
  );
};

exports.getUserByEmail = (email, cb) => {
  connection.query(
    `SELECT id, nama, email, password, role FROM ${table} WHERE email=?`,
    [email],
    cb
  );
};

exports.getUserByCond = (cond, cb) => {
  const orderBy = Object.keys(cond.sort)[0];
  const sort = cond.sort[orderBy];
  connection.query(
    `
  SELECT id, nama, email, no_hp, alamat, pekerjaan, umur, jenis_kelamin, gol_darah
  FROM ${table} WHERE ${table}.nama LIKE '%${cond.search}%' 
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
    `SELECT id, foto, nama, email, no_hp, password, alamat, pekerjaan, umur, jenis_kelamin, gol_darah FROM ${table} WHERE id=${id}`,
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
