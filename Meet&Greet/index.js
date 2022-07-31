const express = require("express");
const routes = require("./routes/appRoutes");
const app = express();
const io  = require("socket.io")(5000);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use("/",routes);

// io.connect("http://localhost:3000");

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
