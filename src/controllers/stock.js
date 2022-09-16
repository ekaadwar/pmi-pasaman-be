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
  if (req.authUser.role === "admin") {
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
  } else {
    response(res, 400, false, "You have no authority");
  }
};
