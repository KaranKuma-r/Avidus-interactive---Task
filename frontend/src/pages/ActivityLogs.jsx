/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

import "../styles/activity.css";

const ActivityLogs = () => {
  const [logs, setLogs] =
    useState([]);

  const fetchLogs = async () => {
    try {
      const { data } =
        await API.get(
          "/activity"
        );

      setLogs(data);
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed To Fetch Activity Logs"
      );
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="activity-container">
      <h1 className="activity-title">
        Activity Logs
      </h1>

      <div className="activity-grid">
        {logs.map((log) => (
          <div
            key={log._id}
            className="activity-card"
          >
            <div className="activity-top">
              <h3>
                {
                  log.user
                    ?.name
                }
              </h3>

              <span>
                {log.action}
              </span>
            </div>

            <p className="activity-details">
              {log.details}
            </p>

            <p className="activity-date">
              {new Date(
                log.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLogs;