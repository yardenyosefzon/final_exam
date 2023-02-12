const mongoose = require("mongoose");

function connectDb() {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect("mongodb://127.0.0.1:27017/final_exam");
    console.log("database connected successfully");
  } catch (err) {
    console.log("couldnt connect to the database", err.message);
  }
}
module.exports = connectDb;
