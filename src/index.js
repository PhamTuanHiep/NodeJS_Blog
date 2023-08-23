const path = require("path");
const express = require("express"); //access express in node_modules
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");

const SortMiddleware = require("./app/middlewares/SortMiddleware");

const route = require("./routes");
const db = require("./config/db");

const app = express();
const port = 3000;

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(SortMiddleware);
//HTTP logger
// app.use(morgan("combined"));

//template egine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : "default";
        const icons = {
          default: "oi oi-elevator",
          asc: "oi oi-sort-ascending",
          desc: "oi oi-sort-descending",
        };
        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };
        const icon = icons[sortType];
        const type = types[sortType];

        return `<a href="?_sort&column=${field}&type=${type}">
        <span class="${icon}"></span>
        </a>`;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Route init
route(app);

// 127.0.0.1 = localhost => create app by express on port:3000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
