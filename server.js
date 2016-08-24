var express = require("express");
var app = express();

var rules = require("./app/index.js");
app.use(rules);

var port = "8080";
var host = "0.0.0.0"

app.listen(port, host);
console.log("Listening on 0.0.0.0:8080");