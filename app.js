const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

var path = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/courses", (req, res) => {
  res.sendFile(path.join(__dirname + "/courses.html"));
});
app.get("/courses2", (req, res) => {
  res.sendFile(path.join(__dirname + "/courses2.html"));
});
app.get("/courses3", (req, res) => {
  res.sendFile(path.join(__dirname + "/courses3.html"));
});
app.get("/testimonials", (req, res) => {
  res.sendFile(path.join(__dirname + "/testimonials.html"));
});

app.listen(port, () => console.log(`App listening om port ${port}`));
