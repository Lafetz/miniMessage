const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
const express = require("express");
const route = express.Router();
route.get("/", (req, res) => {
  res.render("index.pug", {
    messages: messages,
  });
});
route.get("/new", (req, res) => {
  res.render("form");
});
route.post("/new", (req, res) => {
  const message = {
    text: req.body.message,
    user: req.body.userName,
    added: new Date(),
  };
  messages.push(message);
  res.redirect("/");
});
module.exports = route;
