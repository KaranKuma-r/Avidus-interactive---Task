require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const authRoutes = require(
  "./routes/auth.routes"
);

const taskRoutes = require(
  "./routes/task.routes"
);

const adminRoutes = require(
  "./routes/admin.routes"
);

const activityRoutes = require(
  "./routes/activity.routes"
);

const errorHandler = require(
  "./middleware/error.middleware"
);

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/tasks", taskRoutes);

app.use("/api/admin", adminRoutes);

app.use(
  "/api/activity",
  activityRoutes
);

app.use(errorHandler);

module.exports = app;