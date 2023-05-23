const multer = require("multer");
const mongoose = require("mongoose");
// const Grid = require("gridfs-stream");
const path = require("path");

const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, "/uploads");
  // },
  // filename: (req, file, cb) => {
  // cb(
  //   null,
  //  Date.now() + path.extname(file.originalname)
  // );
  // },
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Specify the directory where you want to store the uploaded files
  },
  filename: (req, file, cb) => {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // const fileExtension = path.extname(file.originalname);
    // cb(null, uniqueSuffix + fileExtension); // Generate a unique filename for each uploaded file
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
      callback(null, true);
    } else {
      console.log("only jpg supported");
      callback(null, false);
    }
  },
});
module.exports = upload;
