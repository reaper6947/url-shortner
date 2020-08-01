const path = require("path");
const express = require("express");
const helmet = require("helmet");

const app = express();
const bodyParser = require("body-parser");

//set ejs view
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/views"));

//db connection
require("./db")();

//middleware
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

const notFoundPath = path.join(__dirname, "public/404.html");
if (process.env.PRODUCTION == "true") {
  app.all("*", require("./routes/httpsUpgrade"));
}

//routes

app.use("/url", require("./routes/urlSet.js"));


app.use("/", require("./routes/shortUrl"));

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log("Server started on port " + PORT));
