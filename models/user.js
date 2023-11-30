// user.js
const Mongoose = require("mongoose")
const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  fistname: {
    type: String,
    default: "basic",
    required: true,
  },
  lastname: {
    type: String,
    default: "basic",
    required: true,
  },
  email: {
    type: String,
    default: "basic",
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  
})
module.exports = Mongoose.model("User", UserSchema)
