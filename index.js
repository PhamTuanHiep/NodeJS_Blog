const express = require("express"); //access express in node_modules
const app = express();
const port = 3000;
//route
app.get("/trang-chu", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World!");
});

// 127.0.0.1 = localhost => create app by express on port:3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
