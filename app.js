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
app.get("/trade", (req, res) => {
  res.sendFile(path.join(__dirname + "/trade.html"));
});
app.get("/testimonials", (req, res) => {
  res.sendFile(path.join(__dirname + "/testimonials.html"));
});
app.get("/the-team", (req, res) => {
  res.sendFile(path.join(__dirname + "/team.html"));
});
app.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname + "/faq.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.listen(port, () => console.log(`App listening om port ${port}`));
