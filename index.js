const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World Bangladesh!");
});

const chefs = require("./data.json");
app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedId = chefs.find((c) => c.id == id);
  res.send(selectedId);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
