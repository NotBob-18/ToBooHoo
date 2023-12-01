// task.js
const { Mongoose } = require( "mongoose" );
const TaskSchema = new Mongoose.Schema({   
   Date: {
    type: Number,
    required: false,
  },
  Time: {
    type: Number,
    required: false,
  },
  Task: {
    type: String,
    required: true,
    
  },
  Notes: {
    type: String,
    required: false,
    
  },})


const Task = Mongoose.model("task", TaskSchema)
module.exports = Task