var express = require("express");
var app = express();

var rules = require("./app/index.js");
app.use(rules);

var port = process.env.PORT || "8080";
var host = process.env.HOST || "0.0.0.0"

app.listen(port, host);
console.log("Listening on 0.0.0.0:8080");