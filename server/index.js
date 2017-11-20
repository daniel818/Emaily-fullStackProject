/**
 * Created by Daniel on 19/11/2017.
 */

const express = require("express");
const app = express();

//Route Handler #1
app.get("/", (req, res) => {
  res.send({ bye: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
