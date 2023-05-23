//                                                  Creating a Database                                                     //

//To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create.

//MongoDB will create the database if it does not exist, and make a connection to it.
//Create a database called "mydb":

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
MongoClient.connect(url)
  .then((db) => {
    console.log("Database connected");
    var dbo = db.db("mydb");
    // dbo.createCollection("customers", function (err, res) {
    //   if (err) throw err;
    //   console.log("Collection created!");
    //   db.close();
    // });
    dbo
      .createCollection("customers")
      .then(() => {
        console.log("Collection created!");
        //   db.close();
      })
      .catch((err) => {
        //console.log(err);
        var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo
          .collection("customers")
          .insertOne(myobj)
          .then((res) => {
            console.log(res);
            console.log("data Inserted");
            db.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
  })
  .catch((error) => console.log("Could not connect to mongo db " + error));

MongoClient.connect(url).then((db) => {
  console.log("Database connected");
  var dbo = db.db("mydb");
  var myobj = [
    { name: "John", address: "Highway 71" },
    { name: "Peter", address: "Lowstreet 4" },
    { name: "Amy", address: "Apple st 652" },
    { name: "Hannah", address: "Mountain 21" },
    { name: "Michael", address: "Valley 345" },
    { name: "Sandy", address: "Ocean blvd 2" },
    { name: "Betty", address: "Green Grass 1" },
    { name: "Richard", address: "Sky st 331" },
    { name: "Susan", address: "One way 98" },
    { name: "Vicky", address: "Yellow Garden 2" },
    { name: "Ben", address: "Park Lane 38" },
    { name: "William", address: "Central st 954" },
    { name: "Chuck", address: "Main Road 989" },
    { name: "Viola", address: "Sideway 1633" },
  ];
  dbo
    .collection("customers")
    .insertMany(myobj)
    .then(() => {
      console.log("Multiple data inserted");
      db.close();
    })
    .catch((err) => {
      console.log("Multiple data not inserted");
    });
});

//                                                        next step                                                    //
let mainClient = new MongoClient(url);

async function main() {
  console.log("hello world");

  let client = await mainClient.connect();
  let dbo = client.db("mydb");
  //let collection1 = dbo.collection("customers");

  let res = await dbo.collection("customers").find({}).toArray();

  console.log(res);
}
main().catch((err) => {
  console.log("data not getted!");
});

// creating collections
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.createCollection("customers", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// //Insert Into Collection
// //To insert a record, or document as it is called in MongoDB, into a collection, we use the insertOne() method.
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// //To insert multiple documents into a collection in MongoDB, we use the insertMany() method.
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var myobj = [
//     { name: "John", address: "Highway 71" },
//     { name: "Peter", address: "Lowstreet 4" },
//     { name: "Amy", address: "Apple st 652" },
//     { name: "Hannah", address: "Mountain 21" },
//     { name: "Michael", address: "Valley 345" },
//     { name: "Sandy", address: "Ocean blvd 2" },
//     { name: "Betty", address: "Green Grass 1" },
//     { name: "Richard", address: "Sky st 331" },
//     { name: "Susan", address: "One way 98" },
//     { name: "Vicky", address: "Yellow Garden 2" },
//     { name: "Ben", address: "Park Lane 38" },
//     { name: "William", address: "Central st 954" },
//     { name: "Chuck", address: "Main Road 989" },
//     { name: "Viola", address: "Sideway 1633" },
//   ];
//   dbo.collection("customers").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

// //Find Data
// //In MongoDB we use the find and findOne methods to find data in a collection.

// //To select data from a collection in MongoDB, we can use the findOne() method.

// //The findOne() method returns the first occurrence in the selection.

// //The first parameter of the findOne() method is a query object. In this example we use an empty query object, which selects all documents in a collection (but returns only the first document).
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   dbo.collection("customers").findOne({}, function (err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });

//   //                               Find All                                //

//   // dbo.collection("customers").find({}).toArray(function(err, result) {
//   //     if (err) throw err;
//   //     console.log(result);
//   //     db.close();
//   //   });
// });

// //Filter the Result
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var query = { address: "Park Lane 38" };
//   dbo
//     .collection("customers")
//     .find(query)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

// //To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var query = { address: /^S/ };
//   dbo
//     .collection("customers")
//     .find(query)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

// //Sort the Result

// //Use the value -1 in the sort object to sort descending.

// //{ name: 1 } -> ascending
// //{ name: -1 } -> descending

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var mysort = { name: 1 };
//   dbo
//     .collection("customers")
//     .find()
//     .sort(mysort)
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

// //Delete Document

// //To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.

// //The first parameter of the deleteOne() method is a query object defining which document to delete.
// //If the query finds more than one document, only the first occurrence is deleted.

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var myquery = { address: "Mountain 21" };
//   dbo.collection("customers").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

// //   Delete Many
// // To delete more than one document, use the deleteMany() method.

// // The first parameter of the deleteMany() method is a query object defining which documents to delete.

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var myquery = { address: /^O/ };
//   dbo.collection("customers").deleteMany(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log(obj.result.n + " document(s) deleted");
//     db.close();
//   });
// });

// //Drop Collection

// //You can delete a table, or collection as it is called in MongoDB, by using the drop() method.

// //The drop() method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully, otherwise it returns false.
// //Delete the "customers" table:
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   dbo.collection("customers").drop(function (err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });

// //db.dropCollection
// //You can also use the dropCollection() method to delete a table (collection).

// //The dropCollection() method takes two parameters: the name of the collection and a callback function.
// //Delete the "customers" collection, using dropCollection():
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   dbo.dropCollection("customers", function (err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });

// //Update Document
// // You can update a record, or document as it is called in MongoDB, by using the updateOne() method.

// // The first parameter of the updateOne() method is a query object defining which document to update.

// // Note: If the query finds more than one record, only the first occurrence is updated.
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("myPracticedb");
//   var myquery = { address: "Valley 345" };
//   var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
//   dbo
//     .collection("customers")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       db.close();
//     });
// });

// //
// //

// // Limit the Result
// // To limit the result in MongoDB, we use the limit() method.

// // The limit() method takes one parameter, a number defining how many documents to return.
