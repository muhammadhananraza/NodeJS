const http = require("http");

// creating server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  } else {
    res.end("No such page exists");
  }
});

server.listen(5000);
