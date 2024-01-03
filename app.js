const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Aman");
});

app.listen(process.env.PORT, (error) => {
  console.log(`Server is listening on PORT : ${process.env.PORT}...`);
});
