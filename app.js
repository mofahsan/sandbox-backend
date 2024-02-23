const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { configLoader } = require("./configs/index");


configLoader
  .init()
  .then((data) => {
    console.log("Config loaded successfully.");

    app.use(cors());

    const router = require("./router/route");

    const PORT = process.env.PORT;
    app.use(express.json());

    app.use(router);

    app.listen(PORT, () => {
      console.log("server listening at port " + PORT);
      require("./createSession")

    });
  })
  .catch((e) => {
    console.error("Error loading config file:", e);
  });

  