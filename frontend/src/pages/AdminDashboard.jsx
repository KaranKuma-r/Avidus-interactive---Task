/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import API from "../api/axios";

import "../styles/dashboard.css";

const AdminDashboard = () => {
  const [analytics, setAnalytics] =
    useState({
      totalUsers: 0,
      totalTasks: 0,
      completedTasks: 0,
      pendingTasks: 0,
    });

  const fetchAnalytics =
    async () => {
      try {
        const usersResponse =
          await API.get(
            "/admin/users"
          );

        const tasksResponse =
          await API.get(
            "/admin/tasks"
          );

        const users =
          usersResponse.data;

        const tasks =
          tasksResponse.data;

        const completedTasks =
          tasks.filter(
            (task) =>
              task.status ===
              "Completed"
          ).length;

        const pendingTasks =
          tasks.filter(
            (task) =>
              task.status ===
              "Pending"
          ).length;

        setAnalytics({
          totalUsers:
            users.length,

          totalTasks:
            tasks.length,

          completedTasks,

          pendingTasks,
        });
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        Admin Dashboard
      </h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>
            Total Users
          </h2>

          <h1>
            {
              analytics.totalUsers
            }
          </h1>
        </div>

        <div className="dashboard-card">
          <h2>
            Total Tasks
          </h2>

          <h1>
            {
              analytics.totalTasks
            }
          </h1>
        </div>

        <div className="dashboard-card">
          <h2>
            Completed Tasks
          </h2>

          <h1>
            {
              analytics.completedTasks
            }
          </h1>
        </div>

        <div className="dashboard-card">
          <h2>
            Pending Tasks
          </h2>

          <h1>
            {
              analytics.pendingTasks
            }
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;