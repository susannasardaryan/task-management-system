import Task from "../Task/index.jsx";
import "./index.css";

const TaskList = ({ status, tasks, onAddButtonClick, onEditButtonClick }) => {
  const statusName = status[0].toUpperCase() + status.slice(1);

  return (
    <>
      <section className={`task-list ${status}`}>
        <h3 className={'status-name'}>{statusName}</h3>
        {tasks?.map((task) => (
          <Task key={task.id} task={task} onEditButtonClick={onEditButtonClick}/>
        ))}
        <button className={"add-button"} onClick={() => onAddButtonClick(status)}>
          Add Task +
        </button>
      </section>

    </>
  );
};

export default TaskList;
