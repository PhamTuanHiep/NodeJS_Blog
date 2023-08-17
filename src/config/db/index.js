const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true, //use when unique of slug is deprecated
    });
    console.log("Connect successfully!!");
  } catch (error) {
    console.log("Connect failure!!");
  }
}
module.exports = { connect };
