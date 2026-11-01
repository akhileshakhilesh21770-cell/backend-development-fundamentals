// ============================================================
// server.js
// Lab 1 – Node.js and Express Server
// Course: Backend Development Fundamentals
// Student  : V AKHILESH
// Reg No   : 252U1R3099
// Section  : CSE DS-2B
// ============================================================

// Phase 3 – Step 1: Import Express using require().
// Express is a third-party framework that makes building
// HTTP servers much easier than the built-in 'http' module.
const express = require('express');

// Phase 3 – Step 2: Initialize Express.
// app is our Express application object.
// All routes and middleware are attached to this object.
const app = express();

// Phase 3 – Step 3: Define the port.
// process.env.PORT allows the deployment platform (Render / Railway)
// to inject its own port. If not set, we fall back to 3000 locally.
const PORT = process.env.PORT || 3000;

// ============================================================
// ROUTE 1 – GET /
// Returns a plain-text welcome message with HTTP 200.
// ============================================================
app.get('/', function (req, res) {
  res.status(200).send('Welcome to my Node.js and Express Server!');
});

// ============================================================
// ROUTE 2 – GET /about
// Returns JSON data with student details and HTTP 200.
// ============================================================
app.get('/about', function (req, res) {
  res.status(200).json({
    studentName: 'V AKHILESH',
    registrationNumber: '252U1R3099',
    section: 'CSE DS-2B',
    course: 'Backend Development Fundamentals',
    lab: 'Lab 1 – Node.js and Express Server'
  });
});

// ============================================================
// ROUTE 3 – GET /time
// Returns the current date and time in a readable format.
// ============================================================
app.get('/time', function (req, res) {
  const now = new Date();

  // toLocaleString() converts the Date object into a
  // human-readable string using the system locale.
  const readableTime = now.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });

  res.status(200).json({
    message: 'Current Date and Time',
    dateTime: readableTime,
    isoFormat: now.toISOString()
  });
});

// ============================================================
// ROUTE 4 – 404 Handler (must be LAST)
// Catches any request that didn't match a route above.
// ============================================================
app.use(function (req, res) {
  res.status(404).json({
    status: 404,
    error: 'Page Not Found',
    message: '404 - The page you are looking for does not exist.',
    requestedUrl: req.originalUrl
  });
});

// ============================================================
// Phase 3 – Step 4: Start the server.
// app.listen() binds the application to the given port and
// starts accepting incoming HTTP requests.
// ============================================================
app.listen(PORT, function () {
  console.log('==============================================');
  console.log('  Lab 1 – Express Server is running!');
  console.log('  Student : V AKHILESH | Reg: 252U1R3099');
  console.log('  Server  : http://localhost:' + PORT);
  console.log('==============================================');
  console.log('  Routes available:');
  console.log('    GET /           -> Welcome message');
  console.log('    GET /about      -> Student details (JSON)');
  console.log('    GET /time       -> Current date and time');
  console.log('    Any other URL   -> 404 Not Found');
  console.log('==============================================');
});
