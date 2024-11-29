// server.js
const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

// Create a custom evont emitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Event listener for logging requests
myEmitter.on('log', (message) => {
  console.log(`[LOG]: ${message}`);
});

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log the request method and URL
  myEmitter.emit('log', `Request received: ${req.method} ${req.url}`);
// Use path module to handle file paths
const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);



// Handle different routes
if (req.url === '/') {
  

res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Welcome to the Custom Server!</h1>');
} else if (req.url === '/os-info') {
  // Use os module to get OS information
  const osInfo = {
    platform: os.platform(),
    cpus: os.cpus().length,
    arch: os.arch(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    uptime: os.uptime()
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(osInfo, null, 2));
} else {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('404 Not Found');
}
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
