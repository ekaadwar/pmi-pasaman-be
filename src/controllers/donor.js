const { diffMonth, donorSchedule } = require("../helpers/date");
const { response } = require("../helpers/standardResponse");
const donorModels = require("../models/donor");
const stockModels = require("../models/stock");
const userModels = require("../models/users");
const { APP_URL } = process.env;

// ---------- create ----------
// ---------- create ----------
// ---------- create ----------

exports.addDonor = (req, res) => {
  const { id, location } = req.body;

  userModels.getUserToDonor(id, (error, result) => {
    if (!error) {
      if (result.length) {
        const { golDarah, jadwalDonor, masuk, keluar, total } = result[0];
        let w = 0;
        if (jadwalDonor) {
          w = diffMonth(jadwalDonor);
        } else {
          w = 4;
        }
        if (w >= 3) {
          const jd = donorSchedule();
          const detailData = {
            id,
            col: "jadwal_donor",
            val: jd,
          };
          userModels.updateProfileDetail(detailData, (error) => {
            if (!error) {
              const dd = {
                id,
                golDarah: golDarah,
                location,
              };
              donorModels.addDonor(dd, (error) => {
                if (!error) {
                  const m = masuk + 1;
                  const t = total + 1;
                  const ds = {
                    bloodGroup: golDarah,
                    income: m,
                    expenditure: keluar,
                    total: t,
                  };
                  stockModels.updateStockByBlood(ds, (error) => {
                    if (!error) {
                      return response(
                        res,
                        200,
                        true,
                        "Berhasil menambahkan data donor"
                      );
                    } else {
                      return response(
                        res,
                        400,
                        false,
                        "Gagal menambahkan data donor"
                      );
                    }
                  });
                } else {
                  return response(res, 500, false, error);
                }
              });
            } else {
              return response(res, 500, false, error);
            }
          });
        } else {
          return response(res, 400, false, "Waktu tunggu belum cukup!");
        }
      } else {
        return response(res, 404, false, "user not found!");
      }
    } else {
      return response(res, 500, false, error);
    }
  });
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
                const pageInfo = {
                  totalData: results.length,
                  currentPage: 1,
                  lastPage: 1,
                  limit: 0,
                  nextPage: null,
                  prevPage: null,
                };
                response(
                  res,
                  200,
                  true,
                  `Data riwayat donor ${result[0].nama}`,
                  results,
                  pageInfo
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
              const pageInfo = {
                totalData: results.length,
                currentPage: 1,
                lastPage: 1,
                limit: 0,
                nextPage: null,
                prevPage: null,
              };
              response(
                res,
                200,
                true,
                `Data riwayat donor Anda`,
                results,
                pageInfo
              );
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
