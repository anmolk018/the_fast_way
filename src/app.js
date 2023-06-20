const express = require("express");
const cors = require("cors");
const routes = require("./routes/route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use("/api/v1/", routes);

// Export the router
module.exports = app;
