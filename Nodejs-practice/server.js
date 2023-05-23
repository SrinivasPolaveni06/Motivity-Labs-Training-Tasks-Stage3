const http = require("http");
const fs = require("fs");
// const server = http.createServer((req, res) => {

//     res.send("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Server Started!");
// });

const server = http.createServer((req, res) => {
  // fs.readFile('demofile1.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     return res.end();
  //   });
  res.write("Hello World");
});

server.listen(3000, () => {
  console.log("Server Started!");
});

// const add=require("./practice1");
// console.log(add(3,6));
