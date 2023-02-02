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
module.exports = route;
