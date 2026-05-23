/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import API from "../api/axios";

import "../styles/dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] =
    useState([]);

  const fetchTasks =
    async () => {
      try {
        const { data } =
          await API.get(
            "/tasks"
          );

        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchTasks();
  }, []);

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

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        User Dashboard
      </h1>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>
            Total Tasks
          </h2>

          <h1>
            {tasks.length}
          </h1>
        </div>

        <div className="dashboard-card">
          <h2>
            Completed Tasks
          </h2>

          <h1>
            {
              completedTasks
            }
          </h1>
        </div>

        <div className="dashboard-card">
          <h2>
            Pending Tasks
          </h2>

          <h1>
            {pendingTasks}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;