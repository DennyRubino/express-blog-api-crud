const express = require("express");
const router = express.Router();
const posts = require("../data/data");

// index
router.get("/", function (req, res) {
  res.json(posts);
});

// show
router.get("/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (post) {
    res.json(post);
  } else {
    res.status(404);
  }
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
