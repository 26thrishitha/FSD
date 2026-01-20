// // Import express
// const express = require("express");

// // Create express app
// const app = express();

// // Middleware to read JSON body
// app.use(express.json());

// // Define port
// const PORT = 3000;

// // GET API
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // POST API
// app.post("/user", (req, res) => {
//   const data = req.body;

//   res.status(201).json({
//     message: "User created successfully",
//     data: data
//   });
// });

// // PUT API
// app.put("/user/:id", (req, res) => {
//   const userId = req.params.id;
//   const updatedData = req.body;

//   res.status(200).json({
//     message: `User with id ${userId} updated successfully`,
//     data: updatedData
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });





















const express = require("express");
const app = express();

app.use(express.json());

// Temporary in-memory storage
let users = [];

// GET all users
app.get("/api/users", (req, res) => {
  res.status(200).json({
    success: true,
    users
  });
});

// POST create user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created",
    data: newUser
  });
});

// PUT update user
app.put("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  users[userIndex] = { ...users[userIndex], ...req.body };

  res.status(200).json({
    success: true,
    message: "User updated",
    data: users[userIndex]
  });
});

// DELETE user
app.delete("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  users.splice(userIndex, 1);

  res.status(200).json({
    success: true,
    message: "User deleted"
  });
});

app.listen(5000, () => console.log("Server running"));
