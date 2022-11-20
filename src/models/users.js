const connection = require("../helpers/database");
const table = "user";

// ----- create -----
exports.createUserByAdmin = (data, cb) => {
  connection.query(
    `INSERT INTO ${table}  (nama,  no_hp, alamat, pekerjaan, umur, jenis_kelamin, gol_darah ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      data.nama,
      data.no_hp,
      data.alamat,
      data.pekerjaan,
      data.umur,
      data.jenis_kelamin,
      data.gol_darah,
    ],
    cb
  );
};

exports.createUserDetailByAdmin = (data, cb) => {
  connection.query(
    `INSERT INTO detail_user  (foto, id_user, email, password, tanggal_lahir) VALUES(?, LAST_INSERT_ID(), ?, ?, ?)`,
    [data.foto, data.email, data.password, data.tanggalLahir],
    cb
  );
};

exports.createUsers = (data, cb) => {
  connection.query(
    `INSERT INTO user (nama, no_hp) VALUES (?, ?)`,
    [data.nama, data.noHp],
    cb
  );
};

exports.createDetailUsers = (data, cb) => {
  connection.query(
    `INSERT INTO detail_user (id_user, email, password) VALUES ( LAST_INSERT_ID(), ?, ?)`,
    [data.email, data.password],
    cb
  );
};

// ----- read -----

exports.getBloodById = (id, cb) => {
  connection.query(`SELECT id, gol_darah FROM ${table} WHERE id=?`, [id], cb);
};

exports.getIdByPhone = (noHp, cb) => {
  connection.query(`SELECT id FROM ${table} WHERE no_hp = ${noHp}`, cb);
};

exports.getTotalUser = (cond, cb) => {
  let whereVar = `${table}.nama LIKE '%${cond.search}%' `;
  if (cond.blood) {
    whereVar += `AND ${table}.gol_darah = '${cond.blood}' `;
  }
  connection.query(
    `SELECT COUNT(${table}.id) as count FROM ${table} LEFT JOIN detail_user ON ${table}.id = detail_user.id_user WHERE ${whereVar} AND detail_user.status = "active" AND detail_user.role = "user";`,
    cb
  );
};

exports.getUser = (cb) => {
  connection.query("SELECT id, email FROM user", cb);
};

exports.getUserByCond = (cond, cb) => {
  const orderBy = Object.keys(cond.sort)[0];
  const sort = cond.sort[orderBy];
  const category = cond.category || null;
  let where = `${table}.nama LIKE '%${cond.search}%'`;
  if (cond.blood) {
    where += ` AND ${table}.gol_darah = "${cond.blood}"`;
  }
  connection.query(
    `
  SELECT 
    ${table}.id,
    ${table}.nama,
    ${table}.alamat,
    ${table}.pekerjaan,
    ${table}.umur,
    ${table}.no_hp,
    ${table}.jenis_kelamin,
    ${table}.gol_darah,
    detail_user.jadwal_donor
  FROM ${table} 
  LEFT JOIN detail_user ON ${table}.id = detail_user.id_user
  WHERE ${where} AND detail_user.status = "active" AND detail_user.role = "user"
  ORDER BY ${
    orderBy === "jadwal_donor" ? "detail_user" : table
  }.${orderBy} ${sort}
  LIMIT ? OFFSET ?`,
    [cond.limit, cond.offset],
    cb
  );
};

exports.getUserByBlood = (blood, cb) => {
  const orderBy = Object.keys(cond.sort)[0];
  const sort = cond.sort[orderBy];
  connection.query(
    `
  SELECT ${table}.id, ${table}.nama, detail_user.email, ${table}.no_hp, ${table}.alamat, ${table}.pekerjaan, ${table}.umur, ${table}.jenis_kelamin, ${table}.gol_darah
  FROM ${table} 
  LEFT JOIN detail_user ON ${table}.id = detail_user.id_user
  WHERE ${table}.nama LIKE '%${cond.search}%' AND ${table}.gol_darah = "A"
  ORDER BY ${table}.${orderBy} ${sort}
  LIMIT ? OFFSET ?`,
    [cond.limit, cond.offset],
    cb
  );
};

exports.getUserByEmail = (email, cb) => {
  connection.query(
    `
      SELECT ${table}.id, ${table}.nama, detail_user.email, detail_user.password, detail_user.role, detail_user.foto 
      FROM ${table} LEFT JOIN detail_user
      ON ${table}.id = detail_user.id_user
      WHERE detail_user.email=?
    `,
    [email],
    cb
  );
};

exports.getUserById = (id, cb) => {
  connection.query(
    `
      SELECT 
        ${table}.id,
        ${table}.nama,
        detail_user.email,
        ${table}.no_hp,
        ${table}.alamat,
        ${table}.pekerjaan,
        ${table}.umur,
        ${table}.jenis_kelamin,
        ${table}.gol_darah,
        detail_user.foto,
        detail_user.role,
        detail_user.status,
        detail_user.email,
        detail_user.tanggal_lahir,
        detail_user.jadwal_donor
      FROM ${table} LEFT JOIN detail_user
      ON ${table}.id = detail_user.id_user
      WHERE ${table}.id=${id}
    `,
    cb
  );
};

exports.getUserIdAndName = (cb) => {
  connection.query(`SELECT id, nama FROM ${table}`, cb);
};

exports.getUserToDonor = (id, cb) => {
  connection.query(
    `
    SELECT 
      ${table}.gol_darah AS golDarah, 
      detail_user.jadwal_donor AS jadwalDonor, 
      stok_darah.masuk AS masuk, 
      stok_darah.keluar AS keluar,
      stok_darah.total AS total 
    FROM ${table} 
    INNER JOIN detail_user ON user.id = detail_user.id_user 
    INNER JOIN stok_darah ON user.gol_darah = stok_darah.gol_darah 
    WHERE ${table}.id = ${id};
    `,
    cb
  );
};

// ----- update -----

exports.updateDetailUser = (data, cb) => {
  connection.query(
    `UPDATE detail_user SET id = ?, email = ? WHERE id=?`,
    [data.id, data.email, data.id],
    cb
  );
};

exports.updateIdUserDetail = (data, cb) => {
  connection.query(
    `UPDATE detail_user SET id_user=? WHERE email=?`,
    [data.id, data.email],
    cb
  );
};

exports.updateProfilePart = (data, cb) => {
  const sql = `UPDATE ${table} SET ${data.col}='${data.val}' WHERE id=${data.id}`;
  connection.query(sql, cb);
};

exports.updateProfileDetail = (data, cb) => {
  const sql = `UPDATE detail_user SET ${data.col}='${data.val}' WHERE id_user=${data.id}`;
  connection.query(sql, cb);
};

exports.updateUserDonorSchedule = (data, cb) => {
  connection.query(
    `UPDATE detail_user SET jadwal_donor = ?, jarak_donor = ?  WHERE id_user=?`,
    [data.schedule, data.diff, data.id],
    cb
  );
};

// delete

exports.deleteUser = (id, cb) => {
  connection.query(
    `UPDATE detail_user SET status="inactive" WHERE id_user=${id}`,
    cb
  );
};
