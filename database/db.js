// db.js
const Mongoose = require("mongoose")
const localDB = `mongodb://localhost:27017/toboohoo`

const connectDB = async () => {
  await Mongoose.connect(localDB, {})
  console.log("MongoDB Connected")
}
module.exports = connectDB