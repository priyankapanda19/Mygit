const express = require("express");
const route = require("./routes/route");
const { default: mongoose } = require("mongoose");
const app = express();
const multer= require("multer");

const { AppConfig } = require('aws-sdk');

app.use(express.json());
app.use( multer().any())

let url ="mongodb+srv://group67:n1plamTjStICrIRT@cluster0.e8wifql.mongodb.net/group67";
let port = process.env.PORT || 3000;

mongoose.connect(url, {useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, function() {
  console.log("Express app running on port " + port);
});







