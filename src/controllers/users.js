const bcrypt = require("bcrypt");
const fs = require("fs");
const itemPicture = require("../helpers/upload").single("picture");
const modelUsers = require("../models/users");
const { response } = require("../helpers/standardResponse");
const { APP_URL } = process.env;

exports.updateProfilePart = (req, res) => {
  itemPicture(req, res, (error) => {
    if (!error) {
      const { id: idUser } = req.authUser;
      const id = parseInt(idUser);

      modelUsers.getUserById(idUser, (error, results) => {
        if (!error) {
          if (req.file) {
            console.log(req.file);
            if (results[0].photo !== null) {
              const fileImage = results[0].photo.split("/")[2];
              const path = `assets/images/${fileImage}`;

              if (fs.existsSync(path)) {
                fs.unlink(path, (error) => {
                  if (error) throw error;
                  console.log(`${path} has been deleted`);
                });
              } else {
                console.log(path);
                console.log("Previous photo is doesn't exists! ");
              }
            }

            req.body.photo = `${process.env.APP_UPLOAD_ROUTE}/${req.file.filename}`;
          }

          const column = Object.keys(req.body);
          const value = Object.values(req.body);
          const countColumn = column.length;

          if (countColumn > 0) {
            for (let i = 0; i < countColumn; i++) {
              const col = column[i];
              const val = value[i];
              const data = { id, col, val };

              modelUsers.updateProfilePart(data, (errorUpdate) => {
                if (!errorUpdate) {
                  console.log(data);
                  console.log(`${col} column has been successfully updated`);
                  console.log(req.body);
                } else {
                  console.log(`${col} column has been failed to update`);
                  console.log(errorUpdate);
                  console.log(req.body);
                }
              });
            }

            return response(
              res,
              200,
              true,
              "the update process has been completed"
            );
          } else {
            return response(res, 400, false, "you have to enter data!");
          }
        } else {
          return response(
            res,
            404,
            false,
            `Data not found! error : ${error.sqlMessage}`
          );
        }
      });
    } else {
      console.log(error);
      return response(
        res,
        400,
        false,
        "an error occured when uploading process"
      );
    }
  });
};

exports.updateUserById = (req, res) => {
  itemPicture(req, res, (error) => {
    if (!error) {
      const { id: idUser } = req.params;
      const id = parseInt(idUser);

      modelUsers.getUserById(id, (error, results) => {
        if (!error) {
          if (req.file) {
            console.log(req.file);
            if (results[0].photo !== null) {
              const fileImage = results[0].photo.split("/")[2];
              const path = `assets/images/${fileImage}`;

              if (fs.existsSync(path)) {
                fs.unlink(path, (error) => {
                  if (error) throw error;
                  console.log(`${path} has been deleted`);
                });
              } else {
                console.log(path);
                console.log("Previous photo is doesn't exists! ");
              }
            }

            req.body.photo = `${process.env.APP_UPLOAD_ROUTE}/${req.file.filename}`;
          }

          const column = Object.keys(req.body);
          const value = Object.values(req.body);
          const countColumn = column.length;

          if (countColumn > 0) {
            for (let i = 0; i < countColumn; i++) {
              const col = column[i];
              const val = value[i];
              const data = { id, col, val };

              modelUsers.updateProfilePart(data, (errorUpdate) => {
                if (!errorUpdate) {
                  console.log(data);
                  console.log(`${col} column has been successfully updated`);
                  console.log(req.body);
                } else {
                  console.log(`${col} column has been failed to update`);
                  console.log(errorUpdate);
                  console.log(req.body);
                }
              });
            }

            return response(
              res,
              200,
              true,
              "the update process has been completed"
            );
          } else {
            return response(res, 400, false, "you have to enter data!");
          }
        } else {
          return response(
            res,
            404,
            false,
            `Data not found! error : ${error.sqlMessage}`
          );
        }
      });
    } else {
      console.log(error);
      return response(
        res,
        400,
        false,
        "an error occured when uploading process"
      );
    }
  });
};

exports.getProfile = (req, res) => {
  modelUsers.getUserById(req.authUser.id, (error, results) => {
    if (!error) {
      if (results[0].foto !== null) {
        results[0].foto = `${APP_URL}${results[0].foto}`;
      }
      return response(res, 200, true, "Get Profile successfuly!", results[0]);
    } else {
      return response(
        res,
        404,
        false,
        `Data not found! error : ${error.sqlMessage}`
      );
    }
  });
};

exports.getUserById = (req, res) => {
  modelUsers.getUserById(req.params.id, (error, results) => {
    if (!error) {
      if (results[0].foto !== null) {
        results[0].foto = `${APP_URL}${results[0].foto}`;
      }
      return response(res, 200, true, "Get Profile successfuly!", results[0]);
    } else {
      return response(
        res,
        404,
        false,
        `Data not found! error : ${error.sqlMessage}`
      );
    }
  });
};

exports.addUser = (req, res) => {
  if (req.authUser.role === "admin") {
    itemPicture(req, res, async (error) => {
      if (!error) {
        req.body.file = req.file
          ? `${process.env.APP_UPLOAD_ROUTE}/${req.file.filename}`
          : null;

        const data = req.body;
        data.password = await bcrypt.hash(
          data.password,
          await bcrypt.genSalt()
        );

        modelUsers.createUserByAdmin(data, (error, results) => {
          if (!error) {
            if (results.affectedRows) {
              return response(
                res,
                200,
                true,
                "Data has been inserted succesfully!"
              );
            } else {
              return response(res, 400, false, "Failed to created items");
            }
          } else {
            response(res, 500, false, error);
          }
        });
      } else {
        return standardResponse(res, 500, false, error);
      }
    });
  } else {
    return response(res, 400, false, "Sorry, you have no authority!");
  }
};

exports.getUsers = (req, res) => {
  if (req.authUser.role === "admin") {
    const condition = req.query;
    condition.search = condition.search || "";
    condition.sort = condition.sort || {};
    condition.sort.id = condition.sort.id || "ASC";
    condition.limit = parseInt(condition.limit) || 5;
    condition.offset = parseInt(condition.offset) || 0;
    condition.page = parseInt(condition.page) || 1;
    condition.offset = condition.page * condition.limit - condition.limit;

    let pageInfo = {};
    modelUsers.getUserByCond(condition, (error, resUser) => {
      if (!error) {
        modelUsers.getTotalUser(condition, (errTotal, resTotal) => {
          if (!errTotal) {
            const totalData = resTotal[0].count;
            const lastPage = Math.ceil(totalData / condition.limit);

            pageInfo.totalData = totalData;
            pageInfo.currentPage = condition.page;
            pageInfo.lastPage = lastPage;
            pageInfo.limit = condition.limit;
            pageInfo.nextPage =
              condition.page < lastPage
                ? `${APP_URL}/users/?page=${pageInfo.currentPage + 1}`
                : null;
            pageInfo.prevPage =
              condition.page > 1
                ? `${APP_URL}/users/?page=${pageInfo.currentPage - 1}`
                : null;
            return response(
              res,
              200,
              true,
              "Search data succesfully",
              resUser,
              pageInfo
            );
          } else {
            return response(res, 404, false, "Data not found!", results);
          }
        });
      } else {
        response(res, 500, false, `An error occured : ${error}`);
      }
    });
  } else {
    return response(res, 400, false, "Sorry, you have no authority!");
  }
};

exports.updateDetailUser = (req, res) => {
  modelUsers.getUser((error, results) => {
    if (!error) {
      results.map((items, idx) => {
        modelUsers.updateDetailUser(items, (errUpdate) => {
          if (!errUpdate) {
            console.log(items.id);
          } else {
            console.log(`error update at id = ${items.id}. ${errUpdate}`);
          }
        });
      });
    } else {
      console.log(error);
    }
  });
};
