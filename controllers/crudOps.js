const Task = require("../models/tasks");

// delete task
exports.deleteTsk = async (req, res, next) => {
  try{
    await Task.findByIdAndDelete(req.params.id);
      res.status(201).json({message: "Task has been deleted"});
  } catch(error) {
    res.status(400).json({ message: "Unable to delete task", error: error.message })
  }
};



// create task
exports.create = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({ message: "The task has been added" });
  } catch (error) {
    res.status(400).json({ error: 'your shit broken dawg', error: error.message })
  }
};

// update task
exports.updateTsk = async (req, res, next) => {
  try{
  await Task.findByIdAndUpdate(req.params.id,
    req.body, {
      new: true,
    });
    res.status(201).json({ message: "Task has been updated"});
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error", error: error.message })
  }
};



// read task
exports.readTsk = async (req, res) => {
  try {
  await Task.find(tasks);
    res.status(201).json(Task);
  } catch (error) {
    res.status(400).json({ message: "Internal error", error: error.message})
  }
};


