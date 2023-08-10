const path = require("path");
const express = require("express"); //access express in node_modules
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//HTTP logger
// app.use(morgan("combined"));

//template egine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Route init
route(app);

// 127.0.0.1 = localhost => create app by express on port:3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
