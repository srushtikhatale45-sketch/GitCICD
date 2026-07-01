const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello from my CI/CD demo to Github Actions!</h1>');
  res.end('<h2>Welcome to my CI/CD demo!</h2>');
});

server.listen(3001, () => {
  console.log('Server running on port 3001');
});