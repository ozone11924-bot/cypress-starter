const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const dataFile = path.join(__dirname, "..", "data", "items.json");

// Read items
function readItems() {
  try {
    const data = fs.readFileSync(dataFile, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write items
function writeItems(items) {
  fs.writeFileSync(dataFile, JSON.stringify(items, null, 2));
}

// GET all items
router.get("/", (req, res) => {
  const items = readItems();
  res.json(items);
});

// POST create item
router.post("/", (req, res) => {
  const items = readItems();

  const newItem = {
    id: Date.now(),
    name: req.body.name,
    quantity: req.body.quantity
  };

  items.push(newItem);
  writeItems(items);

  res.json(newItem);
});

// PUT update item
router.put("/:id", (req, res) => {
  const items = readItems();
  const id = parseInt(req.params.id);

  const index = items.findIndex((i) => i.id === id);
  if (index === -1) return res.status(404).json({ error: "Item not found" });

  items[index].name = req.body.name;
  items[index].quantity = req.body.quantity;

  writeItems(items);
  res.json(items[index]);
});

// DELETE item
router.delete("/:id", (req, res) => {
  const items = readItems();
  const id = parseInt(req.params.id);

  const filtered = items.filter((i) => i.id !== id);
  writeItems(filtered);

  res.json({ success: true });
});

module.exports = router;