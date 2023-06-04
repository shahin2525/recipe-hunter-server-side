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

// app.get("/news/:id", (req, res) => {
//     const id = req.params.id;
//     const selectedId = news.find((n) => n._id === id);
//     res.send(selectedId);
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
