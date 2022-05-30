var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path')

var mongo_uri = "mongodb+srv://admin:supervis@mongodb.zptdq.gcp.mongodb.net/reactdb?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose
  .connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("[success] task 2 : connected to the database ");
    },
    (error) => {
      console.log("[failed] task 2 " + error);
      process.exit();
    }
  );

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("[success] task 1 : listening on port " + port);
});

app.get("/", (req, res) => {
  //res.status(200).send("หน้าแรกของ api express");
  res.status(200).sendFile(path.join(__dirname, '/index.html'));
  
});

// Posts api
var Post = require("./routers/post-router");
app.use("/api/posts", Post);

// Foods api
var Food = require("./routers/food-router");
app.use("/api/foods", Food);

// Attractions api
var Attractions = require("./routers/attractions-router");
app.use("/api/attractions", Attractions);

app.use((req, res, next) => {
  var err = new Error("ไม่พบ path ที่คุณต้องการ");
  err.status = 404;
  next(err);
});
