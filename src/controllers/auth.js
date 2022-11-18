const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { kirimEmail } = require("../helpers/email");
const { response } = require("../helpers/standardResponse");
const modelUsers = require("../models/users");
const modelAuth = require("../models/auth");

exports.signup = async (req, res) => {
  const data = req.body;
  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());

  modelUsers.createUsers(data, (error) => {
    if (!error) {
      modelUsers.createDetailUsers(data, (errDetail) => {
        if (!errDetail) {
          return response(res, 200, true, "Register successfully");
        } else {
          return response(res, 500, false, "Detail failed to add");
        }
      });
    } else {
      console.log(error);
      return response(
        res,
        500,
        false,
        `Register failed! Error : ${error.sqlMessage}. sql : ${error.sql}`
      );
    }
  });
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  modelUsers.getUserByEmail(email, async (error, results) => {
    if (!error) {
      if (results.length > 0) {
        const user = results[0];
        const userId = user.id;
        const compare = await bcrypt.compare(password, user.password);

        if (compare) {
          const payload = { id: user.id, email: user.email, role: user.role };
          const token = jwt.sign(payload, process.env.APP_KEY);
          response(res, 200, true, `Welcome ${user.nama}`, {
            userId,
            token,
            photo: user.foto,
          });
        } else {
          response(res, 400, false, "Wrong email or password");
        }
      } else {
        response(res, 404, false, "Email not found!");
      }
    } else {
      console.log(error);
      response(res, 500, false, "An error occured");
    }
  });
};

exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  modelUsers.getUserByEmail(email, async (error, results) => {
    if (!error) {
      if (results.length > 0) {
        // modelAuth.getDataByIdUser(results[0].id, (err, count) => {
        //   if (!err) {
        //     if (count.length > 0) {
        //       modelAuth.deleteDataById(count[0].id, (err) => {
        //         if (!err) {
        //           console.log("ok");
        //         } else {
        //           console.log("token lama gagal di hapus");
        //         }
        //       });
        //     }
        //   } else {
        //     console.log(err);
        //   }
        // });

        const forgotToken = await bcrypt.hash(
          results[0].id.toString(),
          await bcrypt.genSalt()
        );

        const templateEmail = {
          from: "PMI Pasaman",
          to: email,
          subject: "Link Reset Password",
          html: `<p>Silahkan klik link di bawah ini untuk reset password Anda.</p><p>${process.env.APP_URL}/auth/resetpassword/${forgotToken}</p>`,
        };

        const forgotData = {
          id: results[0].id,
          token: forgotToken,
        };

        modelAuth.addData(forgotData, (err) => {
          if (!err) {
            kirimEmail(templateEmail);
            return response(
              res,
              200,
              true,
              `Link reset password berhasil di kirim`
            );
          } else {
            console.log(err);
            return response(res, 404, false, "token gagal disimpan");
          }
        });
      } else {
        return response(res, 404, false, "Email tidak tersedia");
      }
    } else {
      return response(res, 500, false, `An error ocured. ${error}`);
    }
  });
};

exports.resetPassword = (req, res) => {
  const { token } = req.params;
  console.log(token);
};
