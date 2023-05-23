const multer = require("multer");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "text/plain"
    ) {
      callback(null, true);
    } else {
      console.log("only jpg supported");
      callback(null, false);
    }
  },
});
module.exports = upload;
