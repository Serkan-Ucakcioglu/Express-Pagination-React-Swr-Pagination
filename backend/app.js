const express = require("express");
const app = express();
const connectDb = require("./config/connectDb");
const postRoute = require("./router/postRoute");
const cors = require("cors");

require("dotenv").config();
connectDb();

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/", postRoute);

const port = process.env.PORT || 3001;
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
