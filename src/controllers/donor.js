const { response } = require("../helpers/standardResponse");
const donorModels = require("../models/donor");
const stockModels = require("../models/stock");
const userModels = require("../models/users");

// ----- create -----

exports.addDonor = (req, res) => {
  if (req.authUser.role === "admin") {
    const { id, location } = req.body;
    userModels.getBloodById(id, (error, result) => {
      if (!error) {
        if (result[0].gol_darah) {
          const data = {
            id: result[0].id,
            golDarah: result[0].gol_darah,
            location,
          };
          donorModels.addDonor(data, (errDonor) => {
            if (!errDonor) {
              console.log(data);
              stockModels.getStockByBlood(
                data.golDarah,
                (errStock, resStock) => {
                  if (!errStock) {
                    if (resStock.length > 0) {
                      const masuk = resStock[0].masuk + 1;
                      const total = masuk - resStock[0].keluar;

                      const stockData = { id: resStock[0].id, masuk, total };
                      stockModels.updateStock(stockData, (errUpStok) => {
                        if (!errUpStok) {
                          response(res, 200, true, `Data telah ditambahkan`);
                        } else {
                          console.log(errUpStok);
                          response(
                            res,
                            500,
                            false,
                            `Terjadi kesalahan saat memperbarui data stok darah.`
                          );
                        }
                      });
                    } else {
                      response(
                        res,
                        404,
                        false,
                        "No data found in blood stock table"
                      );
                    }
                  } else {
                    console.log(errStock);
                    response(res, 500, false, `An error occured. ${errStock}`);
                  }
                }
              );
            } else {
              console.log(errDonor);
              response(res, 500, false, `An error occured. ${errDonor}`);
            }
          });
        } else {
          console.log("User data is not available.");
          response(res, 404, false, "Data tidak tersedia");
        }
      } else {
        response(res, 500, false, `An error occured. ${error}`);
      }
    });
  } else {
    response(res, 400, false, "Sorry, you have no authority.");
  }
};

// ----- read -----
exports.getDonorData = (req, res) => {
  if (req.authUser.role === "admin") {
    donorModels.getDonorData((error, results) => {
      if (!error) {
        response(res, 200, true, "Riwayat donor", results);
      } else {
        response(res, 500, false, `an error occured. ${error}`);
      }
    });
  } else {
    response(res, 500, false, "Sorry, you have no authority.");
  }
};

exports.getDonorByIdUser = (req, res) => {
  if (req.authUser.role === "admin") {
    const { id } = req.params;
    userModels.getUserById(id, (err, result) => {
      if (!err) {
        if (result.length > 0) {
          donorModels.getDonorByIdUser(id, (error, results) => {
            if (!error) {
              if (results.length > 0) {
                response(
                  res,
                  200,
                  true,
                  `Data riwayat donor ${result[0].nama}`,
                  results
                );
              } else {
                response(
                  res,
                  404,
                  false,
                  `Data donor user ${result[0].nama} tidak ditemukan.`
                );
              }
            } else {
              response(
                res,
                500,
                false,
                `An error occured when get donor data. ${error}`
              );
            }
          });
        } else {
          response(res, 404, false, "Sorry, user not found.");
        }
      } else {
        response(res, 500, false, `An error occured. ${err}`);
      }
    });
  } else {
    response(res, 400, false, "Maaf, Anda tidak memiliki otoritas.");
  }
};

exports.getMyHistory = (req, res) => {
  const { id } = req.authUser;
  console.log(id);
  userModels.getUserById(id, (err, result) => {
    if (!err) {
      if (result.length > 0) {
        donorModels.getDonorByIdUser(id, (error, results) => {
          if (!error) {
            if (results.length > 0) {
              response(res, 200, true, `Data riwayat donor Anda`, results);
            } else {
              response(res, 404, false, `Data donor Anda tidak ditemukan.`);
            }
          } else {
            response(
              res,
              500,
              false,
              `An error occured when get donor data. ${error}`
            );
          }
        });
      } else {
        response(res, 404, false, "Sorry, user not found.");
      }
    } else {
      response(res, 500, false, `An error occured. ${err}`);
    }
  });
};
