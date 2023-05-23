var express = require("express");
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const path = require("path");
const fileSchema = require("../modal/fileSchema");
const upload = require("../middilware/index");

/* GET home page. */
mongoose.connect(
  "mongodb+srv://Srinivas:0ZaOGW9z5KFgNgFQ@cluster0.n0orkbf.mongodb.net/fileUploadProject?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const conn = mongoose.connection;
console.log("hello world ");
let gfs;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("uploads");
});

// Set up storage engine for multer

// Upload route
router.post("/", upload.single("File"), (req, res) => {
  const file = req.file;
  //const { filename, path: filePath, mimetype } = file;

  //console.log(req);
  if (req.file) {
    let variable = new fileSchema({ File: req.file.filename });
    variable
      .save()
      .then((response) => {
        res.json({ response: "uploaded success" });
      })
      .catch((err) => {
        res.json({ response: "uploaded failure" });
      });
  } else {
    res.json({ response: "not supported" });
  }

  // const writeStream = gfs.createWriteStream({
  //   filename,
  //   contentType: mimetype,
  // });
  // const readStream = fs.createReadStream(filePath);

  // readStream.pipe(writeStream);
  // // const conn=async function main() {
  // //     const connectionUrl =
  // //       "mongodb+srv://Srinivas:0ZaOGW9z5KFgNgFQ@cluster0.n0orkbf.mongodb.net/fileUploadProject?retryWrites=true&w=majority";
  // //     await mongoose.connect(connectionUrl);

  // //     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  // //   }
  // //   main().catch((err) => console.log(err));

  // writeStream.on("close", (uploadedFile) => {
  //   fs.unlinkSync(filePath); // Remove the temporary file
  //   res.json({ message: "File uploaded successfully" });
  // });

  // writeStream.on("error", (error) => {
  //   console.error("Error uploading file: ", error);
  //   res.status(500).json({ error: "Failed to upload file" });
  // });
});

module.exports = router;
