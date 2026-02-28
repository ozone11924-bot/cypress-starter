const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
const itemsRoute = require("./routes/items");
app.use("/api/items", itemsRoute);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});