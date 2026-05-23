/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../../api/axios";

import "../../styles/task.css";

const TaskForm = ({
  fetchTasks,
  editTask,
  setEditTask,
}) => {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
    });

  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title,

        description:
          editTask.description,
      });
    }
  }, [editTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // UPDATE TASK
      if (editTask) {
        await API.put(
          `/tasks/${editTask._id}`,
          formData
        );

        toast.success(
          "Task Updated"
        );

        setEditTask(null);
      }

      // CREATE TASK
      else {
        await API.post(
          "/tasks",
          formData
        );

        toast.success(
          "Task Created"
        );
      }

      fetchTasks();

      setFormData({
        title: "",
        description: "",
      });
    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong"
      );
    }
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Task Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <textarea
        placeholder="Description"
        name="description"
        value={
          formData.description
        }
        onChange={handleChange}
      />

      <button type="submit">
        {editTask
          ? "Update Task"
          : "Create Task"}
      </button>
    </form>
  );
};

export default TaskForm;