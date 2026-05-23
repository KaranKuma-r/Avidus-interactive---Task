import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  handleDelete,
  setEditTask,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          handleDelete={
            handleDelete
          }
          setEditTask={
            setEditTask
          }
        />
      ))}
    </div>
  );
};

export default TaskList;