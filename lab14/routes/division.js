const express = require("express");
const divide = require("../controllers/division.js");

const router = express.Router();

router.get("/division/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(divide(a, b));
});
router.get("/division", (req, res) => {
  const { a, b } = req.query;
  res.send(divide(a, b));
});
router.post("/division", (req, res) => {
  const { a, b } = req.body;
  res.send(divide(a, b));
});

module.exports = router;
