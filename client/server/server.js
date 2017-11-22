const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static("dist"));
app.use(express.static("public"));

app.get('/', (req,res) => res.send('index.html'));

module.exports = app;
