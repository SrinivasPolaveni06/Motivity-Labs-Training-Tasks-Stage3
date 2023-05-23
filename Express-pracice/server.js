//Without using any framework
const http = require("http");

const server = http.createServer("/",(req, res, next) => {
    res.send("Welcome to my world");
});

// server.getConnections("/", (req, res, next) => {
//   res.send("Welcome to my world");
// });

server.listen(3000, () => {
  console.log("Server Started!");
});
