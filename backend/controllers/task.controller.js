const Task = require("../models/Task");

const logActivity = require("../utils/logActivity");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.user.id,
    });

    await logActivity(
      req.user.id,
      "CREATE_TASK",
      task.title
    );

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      createdBy: req.user.id,
    });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (
      task.createdBy.toString() !== req.user.id
    ) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const updatedTask =
      await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    await logActivity(
      req.user.id,
      "UPDATE_TASK",
      updatedTask.title
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (
      task.createdBy.toString() !== req.user.id &&
      req.user.role !== "Admin"
    ) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await task.deleteOne();

    await logActivity(
      req.user.id,
      "DELETE_TASK",
      task.title
    );

    res.status(200).json({
      message: "Task Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};