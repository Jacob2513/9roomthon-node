const http = require('http');
const puppeteer = require('puppeteer')
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Node');
});

server.listen(port, hostname, () => {
  puppeteer;
  console.log(`Server running at http://${hostname}:${port}/`);
});