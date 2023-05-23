var express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var practice = require("./routers/index");
var userDetails = require("./routers/users");
var todoDetails = require("./routers/todos");

app.use(express.json());
app.use(cors());

async function main() {
  const connectionUrl =
    "mongodb+srv://Srinivas:0ZaOGW9z5KFgNgFQ@cluster0.n0orkbf.mongodb.net/sampleProject?retryWrites=true&w=majority";
  await mongoose.connect(connectionUrl);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.send("Welcome To My World");
// });

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/post", practice);
app.use("/user", userDetails);
app.use("/todo", todoDetails);
//app.use("/stored",storedData);

//app.use();

app.listen("3006", () => {
  console.log("server Started");
});
