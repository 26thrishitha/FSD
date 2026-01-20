// Import express
const express = require("express");

// Create express app
const app = express();

// Define port
const PORT = 3000;

// Simple GET API
app.get("/say", (req, res) => {
  res.send("Hello World");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
