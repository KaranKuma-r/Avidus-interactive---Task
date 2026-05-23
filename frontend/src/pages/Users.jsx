/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../api/axios";

import "../styles/users.css";

const Users = () => {
  const [users, setUsers] =
    useState([]);

  // GET USER
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // ADMIN PROTECTION
  if (
    !user ||
    user.role !== "Admin"
  ) {
    toast.error(
      "Only Admin Can Access"
    );

    return <Navigate to="/" />;
  }

  // FETCH USERS
  const fetchUsers = async () => {
    try {
      const { data } =
        await API.get(
          "/admin/users"
        );

      setUsers(data);
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed To Fetch Users"
      );
    }
  };

  // DELETE USER
  const handleDelete =
    async (id) => {
      try {
        await API.delete(
          `/admin/users/${id}`
        );

        toast.success(
          "User Deleted"
        );

        fetchUsers();
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed To Delete User"
        );
      }
    };

  // UPDATE STATUS
  const updateStatus =
    async (id, status) => {
      try {
        await API.put(
          `/admin/users/${id}/status`,
          {
            status,
          }
        );

        toast.success(
          "Status Updated"
        );

        fetchUsers();
      } catch (error) {
        console.log(error);

        toast.error(
          "Failed To Update Status"
        );
      }
    };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      <h1 className="users-title">
        User Management
      </h1>

      <div className="users-grid">
        {users.map((user) => (
          <div
            key={user._id}
            className="user-card"
          >
            <h2>
              {user.name}
            </h2>

            <p>
              <strong>
                Email:
              </strong>{" "}
              {user.email}
            </p>

            <p>
              <strong>
                Role:
              </strong>{" "}
              {user.role}
            </p>

            <p>
              <strong>
                Status:
              </strong>{" "}
              {user.status}
            </p>

            <div className="user-actions">
              <button
                className="status-btn"
                onClick={() =>
                  updateStatus(
                    user._id,
                    user.status ===
                      "Active"
                      ? "Inactive"
                      : "Active"
                  )
                }
              >
                Change Status
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(
                    user._id
                  )
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;