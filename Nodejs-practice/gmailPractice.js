var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "srinivas@gmail.com",
    pass: "srinu123",
  },
});

var mailOptions = {
  from: "srinivas@gmail.com",
  to: "srinivasyadavpolaveni@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
