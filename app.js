"use strict";
const express = require("express");
const Cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("././models/mongoose");
const config = require("./config.json");
const api = require("./routes/api");
const path = require("path");
const history = require('connect-history-api-fallback');

const app = express();

// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));
app.use(Cors());
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public/uploads"))
);
const staticFileMiddleware = express.static(path.join(__dirname + '/public/'));

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

let PORT = config.PORT;
const port = process.env.PORT || PORT;
app.use("/api", api);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/public/index.html'));
});

app
  .listen(port, (req, res) => {
    console.log(`Server listening at ${port}`);
  })
  .on("error", err => {
    //res.send(err);
  });
