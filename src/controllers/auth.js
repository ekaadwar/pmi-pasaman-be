const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("../helpers/standardResponse");
const modelUsers = require("../models/users");

exports.signup = async (req, res) => {
  const data = req.body;
  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt());

  modelUsers.createUsers(data, (error) => {
    if (!error) {
      modelUsers.getIdByPhone(data.noHp, (errId, resId) => {
        if (!errId) {
          const detail = {
            ...data,
            idUser: resId[0].id,
          };
          modelUsers.createDetailUsers(detail, (errDetail) => {
            if (!errDetail) {
              return response(res, 200, true, "Register successfully");
            } else {
              return response(res, 500, false, "Detail failed to add");
            }
          });
        } else {
          return response(res, 400, false, errId);
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
          response(res, 200, true, `Welcome ${user.nama}`, { userId, token });
        } else {
          response(res, 400, false, "Wrong email or password");
        }
      } else {
        response(res, 404, false, "Email not found!");
      }
    } else {
      response(res, 500, false, "An error occured");
    }
  });
};
