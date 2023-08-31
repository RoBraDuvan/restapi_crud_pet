const { Router } = require("express");

const routeHello = Router();

routeHello.get("/", (req, res) => {
  res.send("Hello World")
} )


module.exports = routeHello;