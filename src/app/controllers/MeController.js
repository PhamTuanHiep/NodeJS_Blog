const Course = require("../models/Course");
const { multipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  //[GET] /me/stored/course
  storedCourses(req, res, next) {
    Promise.all([
      Course.find({}),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([courses, deletedCount]) =>
        res.render("me/stored-course", {
          deletedCount,
          courses: multipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  //[GET] /me/trash/course
  trashCourses(req, res, next) {
    Course.findDeleted({ deleted: true })
      .then((courses) =>
        res.render("me/trash-course", {
          courses: multipleMongooseToObject(
            courses.filter((course) => course.deleted)
          ),
        })
      )
      .catch(next);
  }
}
module.exports = new MeController();
