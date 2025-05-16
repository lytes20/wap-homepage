const express = require("express");
const difference = require("../controllers/subtraction.js");

const router = express.Router();

router.get("/subtraction/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(difference(a, b));
});
router.get("/subtraction", (req, res) => {
  const { a, b } = req.query;
  res.send(difference(a, b));
});
router.post("/subtraction", (req, res) => {
  const { a, b } = req.body;
  res.send(difference(a, b));
});

module.exports = router;
