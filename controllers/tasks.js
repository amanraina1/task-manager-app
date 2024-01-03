const Task = require("../models/tasks");
const asyncWrapper = require("../middlewares/async");

const handleGetAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Task.find({});
  res.status(200).json({ allTasks });
});

const handleCreateTask = asyncWrapper(async (req, res) => {
  const createTask = await Task.create(req.body);
  res.status(200).json({ createTask });
});

const handleGetTask = asyncWrapper(async (req, res) => {
  const getTask = await Task.findById(req.params.id);
  if (!getTask) {
    return res
      .status(404)
      .json({ message: `No user found with this id: ${req.params.id}` });
  }
  res.status(200).json(getTask);
});

const handleUpdateTask = asyncWrapper(async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) {
    return res
      .status(404)
      .json({ message: `No user found with this id: ${req.params.id}` });
  }
  res.status(200).json({ updatedTask });
});

const handleDeleteTask = asyncWrapper(async (req, res) => {
  const updatedTask = await Task.findByIdAndDelete(req.params.id, req.body);
  if (!updatedTask) {
    return res
      .status(404)
      .json({ message: `No user found with this id: ${req.params.id}` });
  }
  res.status(200).json({ message: "User deleted successfully" });
});

module.exports = {
  handleGetAllTasks,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
  handleGetTask,
};
