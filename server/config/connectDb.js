const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connected successfully");
  } catch (error) {
    console.log("failed to connect to BD");
  }
};

module.exports = connectDb;
