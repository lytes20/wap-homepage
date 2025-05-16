const express = require("express");
const add = require("../controllers/addition.js");

const router = express.Router();

router.get("/addition/:a/:b", (req, res) => {
  const { a, b } = req.params;
  res.send(add(a, b));
});
router.get("/addition", (req, res) => {
  const { a, b } = req.query;
  res.send(add(a, b));
});
router.post("/addition", (req, res) => {
  const { a, b } = req.body;
  res.send(add(a, b));
});

module.exports = router;
