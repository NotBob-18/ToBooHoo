const Task = require("../models/user")

// delete task 
const deleteTsk = async (req, res, next) => {
    const { id } = req.params
    await Task.findByIdAndDelete(id)
      .then(task =>
        res.status(201).json({ message: "Task deleted", task })
      )
      .catch(error =>
        res
          .status(400)
          .json({ message: "An error occurred", error: error.message })
      )
  }

  // update task 
  const update = async (req, res) => {
    const { id } = req.params;
    const { Task, Notes } = req.body;
  
    try {
      const updatedTask = await Task.findByIdAndUpdate(id, { Task, Notes }, { new: true });
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not updated' });
      }
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

module.exports = {deleteTsk, update}