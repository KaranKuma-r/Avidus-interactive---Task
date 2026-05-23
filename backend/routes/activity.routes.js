const express = require("express");

const router = express.Router();

const protect = require(
  "../middleware/auth.middleware"
);

const adminOnly = require(
  "../middleware/role.middleware"
);

const {
  getActivityLogs,
} = require("../controllers/activity.controller");

router.get(
  "/",
  protect,
  adminOnly,
  getActivityLogs
);

module.exports = router;