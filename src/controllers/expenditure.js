const { response } = require("../helpers/standardResponse");
const expendModels = require("../models/expenditure");
const stockModels = require("../models/stock");

const { APP_URL } = process.env;

// ----- create -----

exports.createExpenditure = (req, res) => {
  if (req.authUser.role === "admin") {
    const data = req.body;
    data.bloodGroup = data.bloodGroup.toUpperCase();
    stockModels.getStockByBlood(data.bloodGroup, (error, result) => {
      if (!error) {
        if (result.length > 0) {
          const stock = result[0];
          if (data.amount > stock.total) {
            response(res, 400, false, "Maaf, stok tidak mencukupi.");
          } else {
            expendModels.createExpenditure(data, (error) => {
              if (!error) {
                const expenditure = Number(stock.keluar) + Number(data.amount);
                const total = Number(stock.masuk) - expenditure;
                const dataStock = {
                  id: stock.id,
                  income: stock.masuk,
                  expenditure,
                  total,
                };
                stockModels.updateStock(dataStock, (errUpdate) => {
                  if (!errUpdate) {
                    console.log(dataStock.expenditure);
                    response(res, 200, true, "Data telah ditambahkan");
                  } else {
                    response(res, 500, false, `An error occure. ${error}`);
                  }
                });
              } else {
                response(
                  res,
                  500,
                  false,
                  `An error occured when create expenditure. ${error}`
                );
              }
            });
          }
        } else {
          response(res, 404, false, `Data golongn darah tidak tersedia.`);
        }
      } else {
        response(res, 500, false, `An error occure. ${error}`);
      }
    });
  } else {
    response(res, 400, false, "Maaf, Anda tidak memiliki otoritas");
  }
};

// ----- read -----

exports.getExpenditure = (req, res) => {
  if (req.authUser.role === "admin") {
    const condition = req.query;
    condition.limit = parseInt(condition.limit) || 20;
    condition.offset = parseInt(condition.offset) || 0;
    condition.page = parseInt(condition.page) || 1;
    condition.offset = condition.page * condition.limit - condition.limit;
    let pageInfo = {};
    expendModels.getExpenditure(condition, (error, results) => {
      if (!error) {
        expendModels.getExpendTotal((error, total) => {
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
            response(
              res,
              200,
              true,
              `Data riwayat pengeluaran:`,
              results,
              pageInfo
            );
          } else {
            response(res, 400, false, `An error occure when get total data`);
          }
        });
      } else {
        response(
          res,
          500,
          false,
          `an error occured when get expenditure. ${error}`
        );
      }
    });
  } else {
    response(res, 400, false, "Maaf, Anda tidak memiliki otoritas.");
  }
};

exports.getExpendByBlood = (req, res) => {
  if (req.authUser.role === "admin") {
    const { bloodGroup } = req.body;
    expendModels.getExpendByBlood(bloodGroup, (error, results) => {
      if (!error) {
        if (results.length > 0) {
          response(
            res,
            200,
            true,
            `Data pengeluaran golongan darah ${bloodGroup}:`,
            results
          );
        } else {
          response(
            res,
            500,
            false,
            `Data golongan daran ${bloodGroup} tidak tersedia`
          );
        }
      } else {
        response(
          res,
          500,
          false,
          `an error occured when get expenditure. ${error}`
        );
      }
    });
  } else {
    response(res, 400, false, "Maaf, Anda tidak memiliki otoritas.");
  }
};

// ----- update -----

// ----- delete -----

exports.deleteExpenditureHistory = (req, res) => {
  expendModels.deleteExpenditureHistory(req.params.id, (error) => {
    if (!error) {
      response(res, 200, true, `Riwayat pengeluaran telah dihapus.`);
    } else {
      console.log(error);
      response(res, 500, false, `An error occured. ${error}`);
    }
  });
};
