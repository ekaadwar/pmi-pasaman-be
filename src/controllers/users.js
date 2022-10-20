const bcrypt = require("bcrypt");
const fs = require("fs");
const itemPicture = require("../helpers/upload").single("picture");
const modelUsers = require("../models/users");
const modelDonor = require("../models/donor");
const getAge = require("../helpers/getAge");
const { response } = require("../helpers/standardResponse");
const { UTF8MB4_TURKISH_CI } = require("mysql/lib/protocol/constants/charsets");
const { APP_URL } = process.env;

// ----- create -----

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

        data.tanggalLahir = new Date(data.tanggalLahir);

        modelUsers.createUserByAdmin(data, (error, results) => {
          if (!error) {
            if (results.affectedRows) {
              modelUsers.createUserDetailByAdmin(data, (error) => {
                if (!error) {
                  const today = new Date();
                  const birthDay = data.tanggalLahir;
                  const thisYear = today.getFullYear();
                  const thisMonth = today.getMonth() + 1;
                  const thisDate = today.getDate();
                  const birthYear = birthDay.getFullYear();
                  const birthMonth = birthDay.getMonth() + 1;
                  const birthDate = birthDay.getDate();

                  let age = thisYear - birthYear;
                  if (thisMonth < birthMonth) {
                    age -= 1;
                  } else if (thisMonth === birthMonth) {
                    if (thisDate < birthDate) {
                      age -= 1;
                    }
                  }

                  const ageData = {
                    col: "umur",
                    val: age,
                    id: results.insertId,
                  };

                  modelUsers.updateProfilePart(ageData, (error) => {
                    if (error) {
                      return response(
                        res,
                        400,
                        false,
                        "Terjadi error saat update Umur!"
                      );
                    } else {
                      return response(
                        res,
                        200,
                        true,
                        "Data has been inserted succesfully!"
                      );
                    }
                  });
                } else {
                  return response(
                    res,
                    400,
                    false,
                    "Failed to created detail items"
                  );
                }
              });
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

// ----- read -----

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
            console.log(resTotal);
            const lastPage = Math.ceil(totalData / condition.limit);

            pageInfo.totalData = totalData;
            pageInfo.currentPage = condition.page;
            pageInfo.lastPage = lastPage;
            pageInfo.limit = condition.limit;
            pageInfo.nextPage =
              condition.page < lastPage
                ? `${APP_URL}/users?page=${pageInfo.currentPage + 1}`
                : null;
            pageInfo.prevPage =
              condition.page > 1
                ? `${APP_URL}/users?page=${pageInfo.currentPage - 1}`
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

exports.getProfile = (req, res) => {
  const id = req.authUser.id;
  modelUsers.getUserById(id, (error, results) => {
    if (!error) {
      if (results[0].foto !== null) {
        results[0].foto = `${APP_URL}${results[0].foto}`;
      }
      modelDonor.getDonorByIdUser(id, (error, resHistory) => {
        if (!error) {
          const jumlah_donor = resHistory.length;
          const result = {
            ...results[0],
            jumlah_donor,
          };
          return response(res, 200, true, "Get profile successfuly!", result);
        } else {
          return response(
            res,
            404,
            true,
            "Error when get users history",
            error
          );
        }
      });
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
  const id = req.params.id;
  modelUsers.getUserById(id, (error, results) => {
    if (!error) {
      if (results.length > 0) {
        if (results[0].foto !== null) {
          results[0].foto = `${APP_URL}${results[0].foto}`;
        }
        modelDonor.getDonorByIdUser(id, (error, resHistory) => {
          if (!error) {
            const jumlah_donor = resHistory.length;
            const result = {
              ...results[0],
              jumlah_donor,
            };
            return response(res, 200, true, "Get User successfuly!", result);
          } else {
            return response(
              res,
              404,
              true,
              "Error when get users history",
              error
            );
          }
        });
      } else {
        return response(res, 404, false, "Data not found!");
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
};

// ----- update -----

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

exports.updateProfilePart = (req, res) => {
  itemPicture(req, res, (error) => {
    if (!error) {
      const { id: idUser } = req.authUser;
      const id = parseInt(idUser);

      modelUsers.getUserById(idUser, (error, results) => {
        if (!error) {
          if (req.file) {
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

              if (
                col === "nama" ||
                col === "no_hp" ||
                col === "alamat" ||
                col === "pekerjaan" ||
                col === "umur" ||
                col === "jenis_kelamin" ||
                col === "gol_darah"
              ) {
                modelUsers.updateProfilePart(data, (errorUpdate) => {
                  if (!errorUpdate) {
                    console.log(`${col} column has been successfully updated`);
                  } else {
                    console.log(`${col} column has been failed to update`);
                  }
                });
              } else {
                modelUsers.updateProfileDetail(data, (errorUpdate) => {
                  if (!errorUpdate) {
                    if (col === "tanggal_lahir") {
                      const age = getAge(val);
                      const ageData = {
                        id,
                        col: "umur",
                        val: age,
                      };

                      modelUsers.updateProfilePart(ageData, (errorAge) => {
                        if (errorAge) {
                          console.log("umur has beed fail to update");
                        }
                      });
                    }
                    console.log(`${col} column has been successfully updated`);
                  } else {
                    console.log(`${col} column has been failed to update`);
                  }
                });
              }
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

      modelUsers.getUserById(idUser, (error, results) => {
        if (!error) {
          if (req.file) {
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

              if (
                col === "nama" ||
                col === "no_hp" ||
                col === "alamat" ||
                col === "pekerjaan" ||
                col === "umur" ||
                col === "jenis_kelamin" ||
                col === "gol_darah"
              ) {
                modelUsers.updateProfilePart(data, (errorUpdate) => {
                  if (!errorUpdate) {
                    console.log(`${col} column has been successfully updated`);
                  } else {
                    console.log(`${col} column has been failed to update`);
                  }
                });
              } else {
                modelUsers.updateProfileDetail(data, (errorUpdate) => {
                  if (!errorUpdate) {
                    if (col === "tanggal_lahir") {
                      const age = getAge(val);
                      const ageData = {
                        id,
                        col: "umur",
                        val: age,
                      };

                      modelUsers.updateProfilePart(ageData, (errorAge) => {
                        if (errorAge) {
                          console.log("umur has beed fail to update");
                        }
                      });
                    }
                    console.log(`${col} column has been successfully updated`);
                  } else {
                    console.log(`${col} column has been failed to update`);
                  }
                });
              }
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
      return response(
        res,
        400,
        false,
        "an error occured when uploading process"
      );
    }
  });
};

// ----- delete -----

exports.deleteUser = (req, res) => {
  modelUsers.deleteUser(req.params.id, (error) => {
    if (!error) {
      response(res, 200, true, `Data user telah dihapus.`);
    } else {
      response(res, 500, false, `An error occured. ${error}`);
    }
  });
};

// ----- development -----
exports.updateIdUserDetail = (req, res) => {
  modelUsers.getUserIdAndName((error, result) => {
    if (!error) {
      result.map((item) => {
        const email = `${item.nama}@mail.com`;
        const data = { id: item.id, email };
        modelUsers.updateIdUserDetail(data, (error) => {
          if (!error) {
            console.log("id successfully updated");
          } else {
            console.log("id failed to update");
          }
        });
      });
      console.log(`${result.length} rows`);
    } else {
      console.log(error);
    }
  });
};
