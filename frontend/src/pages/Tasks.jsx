/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../api/axios";

import TaskForm from "../components/task/TaskForm";

import TaskList from "../components/task/TaskList";

import "../styles/task.css";

const Tasks = () => {
  const [tasks, setTasks] =
    useState([]);

  const [editTask, setEditTask] =
    useState(null);

  // FETCH TASKS
  const fetchTasks = async () => {
    try {
      const { data } =
        await API.get("/tasks");

      setTasks(data);
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed To Fetch Tasks"
      );
    }
  };

  // DELETE TASK
  const handleDelete = async (
    id
  ) => {
    try {
      await API.delete(
        `/tasks/${id}`
      );

      toast.success(
        "Task Deleted"
      );

      fetchTasks();
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed To Delete Task"
      );
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        My Tasks
      </h1>

      <TaskForm
        fetchTasks={fetchTasks}
        editTask={editTask}
        setEditTask={
          setEditTask
        }
      />

      <TaskList
        tasks={tasks}
        handleDelete={
          handleDelete
        }
        setEditTask={
          setEditTask
        }
      />
    </div>
  );
};

export default Tasks;