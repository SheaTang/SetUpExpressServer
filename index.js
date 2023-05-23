const express = require("express");
const app = express();
const port = 3000;

//base URL response
app.get("/", function (req, res) {
  res.send(`On Express server running on port ${port}...`);
});

// data route
app.get("/data", function (req, res) {
  res.send("data will show here...");
});

// initial port
app.listen(port, function () {
  console.log(`Running on port ${port}...`);
});
