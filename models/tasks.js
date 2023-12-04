// task.js
const Mongoose  = require( "mongoose" );
const TaskSchema = new Mongoose.Schema({   
  Date: {
    type: Date,
    
  },
  Task: {
    type: String,
    
    
  },
  Notes: {
    type: String,
   
    
  },})

const Task = Mongoose.model("task", TaskSchema)
module.exports = Task