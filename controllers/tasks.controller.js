const Task = require("../models/tasks.models");

const getAllTasks = (req, res) => {
  res.send("Get All Tasks from the controller");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json({ task });
};

const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update a task");
};

const deleteTask = (req, res) => {
  res.send("delete a task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
