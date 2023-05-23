var MongoClient = require("mongodb").MongoClient;
var http = require("http");

// http.createServer(()=>{

// })
let url = "mongodb://127.0.0.1:27017/SampleProject";
let mangoConnect = new MongoClient(url);
main().catch((err) => console.log(err));
async function main() {
  try {
    let connection = await mangoConnect.connect();
    let dbo = connection.db("SampleProject");
    let response = await dbo.createCollection("ProjectPractice");
    await dbo
      .collection("ProjectPractice")
      .insertOne({ name: "srinivas", age: 26 });
  } catch (err) {
    console.log("database error");
    console.log(err);
  }
}
