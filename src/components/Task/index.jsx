import "./index.css";
import {useContext, useState} from "react";
import EditModal from "../EditModal/index.jsx";
import {TaskManagerContext} from "../TaskManagerContext.jsx";

const Task = ({task, onEditButtonClick}) => {
    const {removeTask} = useContext(TaskManagerContext);

    return (
        <>
            <div className={"task"}>
                <div className={"task-header"}>
                    <p className={"priority"}>{task.priority} priority</p>
                    <div className="actions">
                        <button onClick={() => onEditButtonClick(task)}>
                            <img src={"./edit.png"}/>
                        </button>
                        <button onClick={() => removeTask(task.id)}>
                            <img src={"./delete.png"}/>
                        </button>
                    </div>
                </div>
                <p className={"title"}>{task.title}</p>
                <p className={"description"}>{task.description}</p>

                <p>{task.assigned}</p>
            </div>

        </>
    );
};

export default Task;
