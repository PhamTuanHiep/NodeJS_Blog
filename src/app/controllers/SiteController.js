const Course = require("../models/Course");

class SiteController {
  //[GET] /

  async index(req, res) {
    Course.find()
      .then((courses, err) => {
        res.json(courses);
        console.log(err);
      })
      .catch(() => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }

  //[GET] /search
  search(req, res) {
    res.send("Search anything");
  }
}
module.exports = new SiteController();
