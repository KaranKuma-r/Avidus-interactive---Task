import "../../styles/task.css";

const TaskCard = ({
  task,
  handleDelete,
  setEditTask,
}) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <span>{task.status}</span>

      <div className="task-actions">
        <button
          onClick={() =>
            setEditTask(task)
          }
        >
          Edit
        </button>

        <button
          onClick={() =>
            handleDelete(task._id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;