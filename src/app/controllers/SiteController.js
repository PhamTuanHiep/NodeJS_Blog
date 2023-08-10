class SiteController {
  //[GET] /search
  index(req, res) {
    res.render("home");
  }

  //[GET] /search
  search(req, res) {
    res.send("Search anything");
  }
}
module.exports = new SiteController();
// const NewController = require("./NewsController")
