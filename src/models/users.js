const connection = require("../helpers/database");
const table = "users";

exports.createUsers = (data, cb) => {
  connection.query(
    `INSERT INTO ${table} (name, email, phone, password) VALUES (?,?,?,?)`,
    [data.name, data.email, data.phone, data.password],
    cb
  );
};

exports.getUserByEmail = (email, cb) => {
  connection.query(
    `SELECT id, name, email, password, role FROM ${table} WHERE email=?`,
    [email],
    cb
  );
};

exports.getUserByCond = (cond, cb) => {
  const orderBy = Object.keys(cond.sort)[0];
  const sort = cond.sort[orderBy];
  connection.query(
    `
  SELECT id, name, email, phone, address, profession, age, gender, blood_group
  FROM ${table} WHERE ${table}.name LIKE '%${cond.search}%' 
  ORDER BY ${table}.${orderBy} ${sort}
  LIMIT ? OFFSET ?`,
    [cond.limit, cond.offset],
    cb
  );
};

exports.getTotalUser = (cond, cb) => {
  connection.query(
    `SELECT COUNT (${table}.id) as count FROM ${table} WHERE ${table}.name LIKE '%${cond.search}%'`,
    cb
  );
};
