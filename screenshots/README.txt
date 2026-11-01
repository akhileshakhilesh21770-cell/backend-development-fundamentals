Screenshots Directory
=====================

This folder contains screenshots of all working routes.

HOW TO CAPTURE SCREENSHOTS:
1. Open a terminal in the lab-01 folder
2. Run: node server.js
3. Open your browser and visit each URL below
4. Press Win + Shift + S (Windows Snip) or use the browser's screenshot tool
5. Save each screenshot with the exact filename listed below

REQUIRED SCREENSHOTS:
- home.png      → http://localhost:3000/
- about.png     → http://localhost:3000/about
- time.png      → http://localhost:3000/time
- not-found.png → http://localhost:3000/unknown

EXPECTED RESPONSES (already verified by automated test):
- GET /        → 200 OK | "Welcome to my Node.js and Express Server!"
- GET /about   → 200 OK | JSON with student details
- GET /time    → 200 OK | JSON with current date and time
- GET /unknown → 404 Not Found | JSON error message
