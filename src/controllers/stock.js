const { response } = require("../helpers/standardResponse");
const stockModels = require("../models/stock");

// create

exports.addBloodGroup = (req, res) => {
  if (req.authUser.role === "admin") {
    const { bloodGroup } = req.body;
    stockModels.getStockByBlood(bloodGroup, (error, results) => {
      if (!error) {
        if (results.length > 0) {
          response(
            res,
            400,
            false,
            `Tidak dapat menambahkan data golongan darah ${bloodGroup} karena sudah tersedia.`
          );
        } else {
          stockModels.addBloodGroup(req.body.bloodGroup, (error) => {
            if (!error) {
              response(
                res,
                200,
                true,
                `Data golongan darah ${bloodGroup} telah ditambahkan`
              );
            } else {
              response(
                res,
                400,
                false,
                `Data gagal ditambahkan. Periksa konektifitas Anda.`
              );
            }
          });
        }
      } else {
        response(res, 500, false, `An error occured. ${error}`);
      }
    });
  } else {
    response(res, 400, false, "Sorry, you have no authority.");
  }
};

// read

exports.getStock = (req, res) => {
  stockModels.getStock((error, results) => {
    if (!error) {
      if (results.length > 0) {
        response(res, 200, true, "Blood Stock", results);
      } else {
        response(res, 404, false, "Data not found");
      }
    } else {
      response(res, 500, false, error);
    }
  });
};

// ----- update -----

exports.updateBloodStock = (req, res) => {
  const { bloodGroup, income, expenditure } = req.body;
  let validation = true;

  let total = [];
  for (let i = 0; i < bloodGroup.length; i++) {
    bloodGroup[i] = bloodGroup[i].toUpperCase();
    income[i] = Number(income[i]);
    expenditure[i] = Number(expenditure[i]);
    total[i] = income[i] - expenditure[i];
    if (total[i] < 0) {
      validation = false;
    }
  }

  if (validation === true) {
    for (let i = 0; i < bloodGroup.length; i++) {
      const data = {
        bloodGroup: bloodGroup[i],
        income: income[i],
        expenditure: expenditure[i],
        total: total[i],
      };

      stockModels.updateStockByBlood(data, (error) => {
        if (!error) {
          console.log(`Data golongan darah ${bloodGroup[i]} telah diperbarui`);
        } else {
          console.log(error);
        }
      });
    }

    const message = `Data golongan darah telah diperbarui`;
    return response(res, 200, true, message);
  } else {
    return response(
      res,
      400,
      false,
      "Jumlah pengeluaran melebihi jumlah pemasukan."
    );
  }
};

// ----- delete -----

exports.deleteBloodGroup = (req, res) => {
  if (req.authUser.role === "admin") {
    stockModels.deleteBloodGroup(req.params.id, (error) => {
      if (!error) {
        response(res, 200, true, `Data golongan darah telah dihapus.`);
      } else {
        console.log(error);
        response(res, 500, false, `An error occured. ${error}`);
      }
    });
  } else {
    return response(res, 400, false, "Maaf, Anda tidak memiliki otoritas.");
  }
};
