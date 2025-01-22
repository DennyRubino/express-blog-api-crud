const express = require("express");
const router = express.Router();

// index
router.get("/", function (req, res) {
  res.send("Lista Post");
});

// show
router.get("/:id", function (req, res) {
  res.send("Dettagli dei Post " + req.params.id);
});

// store
router.post("/", function (req, res) {
  res.send("Creazione nuovo Post");
});

// update
router.put("/:id", function (req, res) {
  res.send("Modifica integrale del Post " + req.params.id);
});

// destroy
router.delete("/:id", function (req, res) {
  res.send("Eliminazione del Post " + req.params.id);
});

module.exports = router;
