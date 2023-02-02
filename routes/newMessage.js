const express = require("express");
const route = express.Router();
route.get("/", (req, res) => {
  res.render("form");
});
route.post("/", (req, res) => {
  const message = {
    text: req.body.message,
    user: req.body.userName,
    added: new Date(),
  };
  console.log(message);
  res.redirect("/");
});
module.exports = route;
