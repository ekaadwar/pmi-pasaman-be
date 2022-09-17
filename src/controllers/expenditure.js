const { response } = require("../helpers/standardResponse");
const expendModels = require("../models/expenditure");
const userModels = require("../models/users");
const stockModels = require("../models/stock");

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
                const expenditure = stock.keluar + data.amount;
                const total = stock.masuk - expenditure;
                const dataStock = {
                  id: stock.id,
                  income: stock.masuk,
                  expenditure,
                  total,
                };
                stockModels.updateStock(dataStock, (errUpdate) => {
                  if (!errUpdate) {
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

// ----- update -----

// ----- delete -----
