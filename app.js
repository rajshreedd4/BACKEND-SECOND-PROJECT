const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();

const connectDB = require("./config/db");
connectDB();

const app = express();

app.use(express.json());

app.use("/user", require("./routes/user"));
app.use("/role", require("./routes/role"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});