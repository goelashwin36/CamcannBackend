const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/PostRoutes");
const getRoutes = require("./routes/GetRoutes");
const app = express();
const mongoose = require("mongoose");
require('dotenv/config');
const PORT = process.env.PORT || 3005;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD) {
    mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ds143603.mlab.com:43603/camcann-backend`, (err) => {
        err ? console.log(err) : console.log("Successfully connected to the database!");
    });
}

app.use("/camcann/post", postRoutes);


app.get("/", (req, res) => {
    res.send("Working");
});


app.listen(PORT, () => {
    console.log("Listening on PORT: " + PORT);
});