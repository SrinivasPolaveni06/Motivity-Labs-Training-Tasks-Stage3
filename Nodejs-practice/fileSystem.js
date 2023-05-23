const fs = require("fs");
var http = require("http");
var formidable = require("formidable");
fs.writeFile("fileName.tsx", "File Is Created", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is created");
    fs.readFile("fileName.tsx", "utf-8", (err, file) => {
      if (err) {
        console.log(err);
      } else {
        console.log(file);
      }
    });
    fs.readFile("fileName.tsx", "utf-8", (err, file) => {
      if (err) {
        console.log(err);
      } else {
        console.log(file);
      }
    });
  }
});

//                                                      Create Files                                                    //

// The File System module has methods for creating new files:

// 1) fs.appendFile()
// 2) fs.open()
// 3) fs.writeFile()

// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

//The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:

fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
//Create a new, empty file using the open() method:

fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

//                                                       Read Files                                                      //

// The fs.readFile() method is used to read files on your computer.

// Assume we have the following HTML file (located in the same folder as Node.js):
http
  .createServer(function (req, res) {
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8081);

//                                                       Update Files                                                     //

//The File System module has methods for updating files:

//  1) fs.appendFile()
//  2) fs.writeFile()
//The fs.appendFile() method appends the specified content at the end of the specified file:
fs.appendFile("mynewfile1.txt", " This is my text.", function (err) {
  if (err) throw err;
  console.log("Updated!");
});

//The fs.writeFile() method replaces the specified file and content:

fs.writeFile("mynewfile3.txt", "This is my text", function (err) {
  if (err) throw err;
  console.log("Replaced!");
});

//                                                     Delete Files                                                     //

// To delete a file with the File System module,  use the fs.unlink() method.

// The fs.unlink() method deletes the specified file:

fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});

//                                                       Rename Files                                                         //

//To rename a file with the File System module,  use the fs.rename() method.

//The fs.rename() method renames the specified file:

// fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

//

//                                                         Upload Files                                                       //

//The Formidable Module
//There is a very good module for working with file uploads, called "Formidable".

//The Formidable module can be downloaded and installed using NPM:

//                                     npm install formidable

// ->Step 1: Create an Upload Form
// ->Step 2: Parse the Uploaded File
// ->Step 3: Save the File

//var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath =
          "C:/Users/Your Name/" + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(8080);
