const http = require("http");
const fs = require("fs");

const server = http.createServer( (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html"});
  res.write("Hello World\n");
  res.end();
});

server.listen(9000, () => {
  console.log("Server running on port 9000");
});
