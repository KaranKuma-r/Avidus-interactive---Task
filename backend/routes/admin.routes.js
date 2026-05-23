const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/auth.middleware"
);

const adminOnly = require(
  "../middleware/role.middleware"
);

const {
  getAllUsers,
  deleteUser,
  updateUserStatus,
  getAllTasks,
} = require("../controllers/admin.controller");

router.get(
  "/users",
  protect,
  adminOnly,
  getAllUsers
);

router.delete(
  "/users/:id",
  protect,
  adminOnly,
  deleteUser
);

router.put(
  "/users/:id/status",
  protect,
  adminOnly,
  updateUserStatus
);

router.get(
  "/tasks",
  protect,
  adminOnly,
  getAllTasks
);

module.exports = router;