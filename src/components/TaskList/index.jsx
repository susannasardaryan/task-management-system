import "./index.css";
import Task from "../Task/index.jsx";
import {useDrop} from "react-dnd";
import {useContext} from "react";
import {TaskManagerContext} from "../TaskManagerContext.jsx";

const TaskList = ({status, tasks, onAddButtonClick, onEditButtonClick}) => {
    const statusName = status[0].toUpperCase() + status.slice(1);
    const { editTask } = useContext(TaskManagerContext);

    const [, drop] = useDrop(() => ({
        accept: 'card',
        drop: (item) => {
            console.log({...item, status});
            editTask({...item, status})
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    return (
        <>
            <section className={`task-list ${status}`} ref={drop}>
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
