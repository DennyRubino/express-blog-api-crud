const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./controllers/controllerPosts");
const posts = require("./data/data");

app.get("/", (req, res) => {
  res.json(posts);
});

app.use(express.static("public"));

app.use("/posts", postsRouter);

app.get("/bacheca", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Ciambellone",
      image: `http://localhost:3000/cibi/ciambellone.jpeg`,
      taste_scale: "7/10",
      tags: ["Dolci", "Torte", "Ricette vegetariane", "Ricette al forno"],
    },
    {
      id: 2,
      name: "cracker barbabietola",
      image: `http://localhost:3000/cibi/cracker_barbabietola.jpeg`,
      taste_scale: "6/10",
      tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
      id: 3,
      name: "pane fritto dolce",
      image: `http://localhost:3000/cibi/pane_fritto_dolce.jpeg`,
      taste_scale: "9/10",
      tags: ["Dolci", "Dolci veloci", "Ricette veloci", "Ricette vegetariane"],
    },
    {
      id: 4,
      name: "pasta barbabietola",
      image: `http://localhost:3000/cibi/pasta_barbabietola.jpeg`,
      taste_scale: "8/10",
      tags: ["Primi piatti", "Ricette vegetariane"],
    },
    {
      id: 5,
      name: "torta paesana",
      image: `http://localhost:3000/cibi/torta_paesana.jpeg`,
      taste_scale: "10/10",
      tags: [
        "Dolci",
        "Dolci al cioccolato",
        "Torte",
        "Ricette vegetariane",
        "Ricette al forno",
      ],
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
