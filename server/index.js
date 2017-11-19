/**
 * Created by Daniel on 19/11/2017.
 */

const express = require("express");
const app = express();

//Route Handler #1
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
