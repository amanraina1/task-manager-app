const express = require("express");
const {
  handleGetAllTasks,
  handleCreateTask,
  handleGetTask,
  handleUpdateTask,
  handleDeleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(handleGetAllTasks).post(handleCreateTask);

router
  .route("/:id")
  .get(handleGetTask)
  .patch(handleUpdateTask)
  .delete(handleDeleteTask);

module.exports = router;
