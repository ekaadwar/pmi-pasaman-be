const { response } = require("../helpers/standardResponse");
const donorModels = require("../models/donor");
const stockModels = require("../models/stock");
const userModels = require("../models/users");
const { APP_URL } = process.env;

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
              stockModels.getStockByBlood(
                data.golDarah,
                (errStock, resStock) => {
                  if (!errStock) {
                    if (resStock.length > 0) {
                      const income = resStock[0].masuk + 1;
                      const total = income - resStock[0].keluar;

                      const stockData = {
                        id: resStock[0].id,
                        income,
                        expenditure: resStock[0].keluar,
                        total,
                      };
                      stockModels.updateStock(stockData, (errUpStok) => {
                        if (!errUpStok) {
                          const today = new Date();
                          const date = today.getDate();
                          let month = today.getMonth() + 1;
                          let year = today.getFullYear();

                          month += 3;

                          if (month > 12) {
                            month -= 12;
                            year += 1;
                          }

                          const schedule = `${year}-${month}-${date}`;
                          const dataSchedule = { id: data.id, schedule };

                          userModels.updateUserDonorSchedule(
                            dataSchedule,
                            (errSchedule) => {
                              if (!errSchedule) {
                                response(
                                  res,
                                  200,
                                  true,
                                  `Data telah ditambahkan`
                                );
                              } else {
                                response(
                                  res,
                                  400,
                                  false,
                                  `Jadwal donor gagal diperbarui`
                                );
                              }
                            }
                          );
                        } else {
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
                    response(res, 500, false, `An error occured. ${errStock}`);
                  }
                }
              );
            } else {
              response(res, 500, false, `An error occured. ${errDonor}`);
            }
          });
        } else {
          response(
            res,
            404,
            false,
            "Data tidak tersedia. Silahkan update data Anda dengan mengisi data golongan darah."
          );
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
    const condition = req.query;
    condition.limit = parseInt(condition.limit) || 20;
    condition.offset = parseInt(condition.offset) || 0;
    condition.page = parseInt(condition.page) || 1;
    condition.offset = condition.page * condition.limit - condition.limit;
    let pageInfo = {};

    donorModels.getDonorData(condition, (error, results) => {
      if (!error) {
        donorModels.getDonorTotal((error, total) => {
          if (!error) {
            const totalData = total[0].count;
            const lastPage = Math.ceil(totalData / condition.limit);

            pageInfo.totalData = totalData;
            pageInfo.currentPage = condition.page;
            pageInfo.lastPage = lastPage;
            pageInfo.limit = condition.limit;
            pageInfo.nextPage =
              condition.page < lastPage
                ? `${APP_URL}/donor?page=${pageInfo.currentPage + 1}`
                : null;
            pageInfo.prevPage =
              condition.page > 1
                ? `${APP_URL}/donor?page=${pageInfo.currentPage - 1}`
                : null;
            response(res, 200, true, "Riwayat donor", results, pageInfo);
          } else {
            console.log(error);
            response(res, 400, true, "gagal menghitung total data");
          }
        });
      } else {
        console.log(error);
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

  userModels.getUserById(id, (err, result) => {
    if (!err) {
      if (result.length > 0) {
        donorModels.getMyDonor(id, (error, results) => {
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

// ----- delete -----

exports.deleteDonorHistory = (req, res) => {
  donorModels.deleteDonorHistory(req.params.id, (error) => {
    if (!error) {
      response(res, 200, true, `Riwayat donor telah dihapus.`);
    } else {
      console.log(error);
      response(res, 500, false, `An error occured. ${error}`);
    }
  });
};
