import "./index.css";
import {useContext} from "react";
import {TaskManagerContext} from "../TaskManagerContext.jsx";

const Task = ({task, onEditButtonClick}) => {
    const {removeTask} = useContext(TaskManagerContext);

    return (
        <>
            <div className={"task"}>
                <div className={"task-header"}>
                    <p className={`priority ${task.priority}`}>{task.priority} priority</p>
                    <div className="actions">
                        <button onClick={() => onEditButtonClick(task)}>
                            <img src={"./edit.png"} alt="edit"/>
                        </button>
                        <button onClick={() => removeTask(task.id)}>
                            <img src={"./delete.png"} alt="delete"/>
                        </button>
                    </div>
                </div>
                <div className="task-body">
                    <div className="task-body-text">
                        <p className={"title"}>{task.title}</p>
                        <p className={"description"}>{task.description}</p>
                    </div>
                    {!!task.assignee.id && <img src={task.assignee.avatar} className={'avatar'} alt={'assignee'} title={task.assignee.name} />}
                </div>
            </div>

        </>
    );
};

export default Task;
