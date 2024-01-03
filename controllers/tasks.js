const Task = require("../models/tasks");

const handleGetAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({ allTasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleCreateTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json({ createTask });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleGetTask = async (req, res) => {
  try {
    const getTask = await Task.findById(req.params.id);
    if (!getTask) {
      return res.status(500).json({ message: "No user found" });
    }
    res.status(200).json(getTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleUpdateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedTask) {
      return res.status(404).json({ message: "No user found with this id" });
    }
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleDeleteTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndDelete(req.params.id, req.body);
    if (!updatedTask) {
      return res.status(404).json({ message: "No user found with this id" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleGetAllTasks,
  handleCreateTask,
  handleUpdateTask,
  handleDeleteTask,
  handleGetTask,
};
