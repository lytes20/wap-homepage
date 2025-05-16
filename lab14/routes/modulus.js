const express = require("express");
const modulus = require("../controllers/modulus.js");

const router = express.Router();

router.get("/modulus/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(modulus(a, b));
});
router.get("/modulus", (req, res) => {
  const { a, b } = req.query;
  res.send(modulus(a, b));
});
router.post("/modulus", (req, res) => {
  const { a, b } = req.body;
  res.send(modulus(a, b));
});

module.exports = router;
