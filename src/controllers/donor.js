const response = require("../helpers/standardResponse");
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
                  console.log(resStock);
                } else {
                  console.log(errStock);
                }
              });
            } else {
              console.log(errDonor);
            }
          });
        } else {
          console.log("Anda belum mengisi data golongan darah");
        }
      } else {
        console.log("User data is not available.");
      }
    } else {
      console.log(error);
    }
  });
};
