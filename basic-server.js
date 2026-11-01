// ============================================================
// basic-server.js
// Lab 1 – Backend Development Fundamentals
// Student: V AKHILESH | Reg: 252U1R3099 | Sec: CSE DS-2B
// ============================================================

// Step 1: Import the built-in 'http' module.
// Node.js ships with this module – no installation needed.
const http = require('http');

// Step 2: Define the port the server will listen on.
const PORT = 3000;

// Step 3: Create the HTTP server.
// The callback receives two objects:
//   req  – the incoming request (what the browser sends us)
//   res  – the outgoing response (what we send back)
const server = http.createServer(function (req, res) {

  // Step 4: Set the HTTP status code to 200 (OK) and the
  //         Content-Type header so the browser knows it's plain text.
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Step 5: Send the response body and end the response.
  res.end('Hello');
});

// Step 6: Tell the server to start listening on PORT 3000.
// The callback fires once the server is successfully started.
server.listen(PORT, function () {
  console.log('Basic HTTP Server is running!');
  console.log('Open your browser and visit: http://localhost:' + PORT);
});
