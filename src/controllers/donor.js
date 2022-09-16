const { response } = require("../helpers/standardResponse");
const donorModels = require("../models/donor");
const stockModels = require("../models/stock");
const userModels = require("../models/users");

exports.addDonor = (req, res) => {
  const { id, location } = req.body;
  userModels.getBloodById(id, (error, result) => {
    if (!error) {
      if (result.length > 0) {
        if (result[0].gol_darah) {
          const data = {
            id: result[0].id,
            golDarah: result[0].gol_darah,
            location,
          };
          donorModels.addDonor(data, (errDonor) => {
            if (!errDonor) {
              stockModels.getStock(data.golDarah, (errStock, resStock) => {
                if (!errStock) {
                  const masuk = resStock[0].masuk + 1;
                  const total = masuk - resStock[0].keluar;
                  console.log(
                    `id = ${id}, masuk = ${masuk}, keluar = ${resStock[0].keluar}, total = ${total}`
                  );
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
                  console.log(errStock);
                  response(res, 500, false, `An error occured. ${errStock}`);
                }
              });
            } else {
              console.log(errDonor);
              response(res, 500, false, `An error occured. ${errDonor}`);
            }
          });
        } else {
          response(res, 400, false, "Anda belum mengisi data golongan darah");
        }
      } else {
        console.log("User data is not available.");
        response(res, 404, false, "Data tidak tersedia");
      }
    } else {
      response(res, 500, false, `An error occured. ${error}`);
    }
  });
};
