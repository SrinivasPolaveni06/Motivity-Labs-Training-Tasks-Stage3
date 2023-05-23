var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var fileRouter = require("./routes/file");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/upload", fileRouter);
app.use(express.static(path.join(__dirname, "uploads")));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

// const express = require("express");
// const multer = require("multer");
// const mongoose = require("mongoose");
// const Grid = require("gridfs-stream");
// const path = require("path");

// const app = express();

// // Set up MongoDB connection
// mongoose.connect(
//   "mongodb+srv://Srinivas:0ZaOGW9z5KFgNgFQ@cluster0.n0orkbf.mongodb.net/fileUploadProject?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// const conn = mongoose.connection;

// let gfs;
// conn.once("open", () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("uploads");
// });
// // Set up storage engine for multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const upload = multer({ storage });

// // Upload route
// app.post("/upload", upload.single("file"), (req, res) => {
//   const file = req.file;
//   const { filename, path: filePath, mimetype } = file;

//   const writeStream = gfs.createWriteStream({
//     filename,
//     contentType: mimetype,
//   });
//   const readStream = fs.createReadStream(filePath);
//   readStream.pipe(writeStream);

//   writeStream.on("close", (uploadedFile) => {
//     fs.unlinkSync(filePath); // Remove the temporary file
//     res.json({ message: "File uploaded successfully" });
//   });

//   writeStream.on("error", (error) => {
//     console.error("Error uploading file: ", error);
//     res.status(500).json({ error: "Failed to upload file" });
//   });
// });

// // app.listen(3000, () => {
// //   console.log("Server is running on port 3000");
// // });
