const nodemailer = require("nodemailer");

const emailController = {};

emailController.sendEmail = async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "",
    auth: {
      user: "@.com",
      pass: "",
    },
  });

  let mailOptions = {
    from: "",
    to: "",
    subject: "Test Email",
    text: `Does this work?`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = emailController;
