const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/auth.middleware"
);

const {
  createTask,
  getMyTasks,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

router.post(
  "/",
  protect,
  createTask
);

router.get(
  "/",
  protect,
  getMyTasks
);

router.put(
  "/:id",
  protect,
  updateTask
);

router.delete(
  "/:id",
  protect,
  deleteTask
);

module.exports = router;