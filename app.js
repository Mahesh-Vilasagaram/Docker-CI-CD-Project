const http = require('http');

http.createServer((req, res) => {
  res.end("Docker CI/CD App Running Successfully 🚀");
}).listen(3000);

