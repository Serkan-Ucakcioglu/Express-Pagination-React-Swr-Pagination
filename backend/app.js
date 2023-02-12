const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const postRoute = require("./router/postRoute");
require("dotenv").config();
connectDb();

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});
app.use("/", postRoute);

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
