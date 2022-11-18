const nodemailer = require("nodemailer");

exports.kirimEmail = (dataEmail) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "pmi.kabpasaman@gmail.com",
      pass: "hcvstahdxiguklzu",
    },
  });
  return transporter
    .sendMail(dataEmail)
    .then((info) => console.log(info))
    .catch((err) => console.log(`terjadi kesalahan : ${err}`));
};
