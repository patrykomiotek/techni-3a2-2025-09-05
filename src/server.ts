// const http = require('node:http');
import http from "node:http";
import { nowDate } from "./now.js";

const server = http.createServer({ keepAliveTimeout: 60000 }, (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: nowDate(),
    })
  );
});

server.listen(3000);
// Close the server after 10 seconds
// setTimeout(() => {
//   server.close(() => {
//     console.log("server on port 3000 closed successfully");
//   });
// }, 10000);
