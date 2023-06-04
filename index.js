const express = require("express");
const cors = require("cors");
const app = express();
// const port = process.env.PORT || 3000;
const port = process.env.PORT || 3000;

app.use(cors());
// const chefs = require("./data.json");
const chefs = require("./data.json");
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/", (req, res) => {
  res.send("Hello World Bangladesh!");
});

// app.get("/chefs", (req, res) => {
//   res.send(chefs);
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
