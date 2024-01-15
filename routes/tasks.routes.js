const express = require("express");
const router = express.Router();

//controllers
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

router.route("/")
                .get(getAllTasks)
                .post(createTask);

router.route("/:id")
                    .get(getSingleTask)
                    .patch(updateTask)
                    .delete(deleteTask);

module.exports = router;
