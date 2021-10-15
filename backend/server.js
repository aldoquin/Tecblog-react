const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
// const path = require("path");
require("dotenv").config();
const connectDB = require("./database/db");
const routes = require("./routes/routes");
const blogRoutes = require("./routes/blogRoutes");

app.use(express.json());
app.use(cors());
app.use("/api", routes, blogRoutes);
connectDB();
app.listen(port, () => {
  console.log(`App Listening port ${port}`);
});
