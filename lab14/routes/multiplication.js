const express = require("express");
const multiply = require("../controllers/multiplication.js");

const router = express.Router();

router.get("/multiplication/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(multiply(a, b));
});
router.get("/multiplication", (req, res) => {
  const { a, b } = req.query;
  res.send(multiply(a, b));
});
router.post("/multiplication", (req, res) => {
  const { a, b } = req.body;
  res.send(multiply(a, b));
});

module.exports = router;
