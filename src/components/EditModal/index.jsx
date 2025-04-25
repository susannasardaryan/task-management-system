import {PRIORITIES, STASUSES} from '../../constants/consts.js';
import {useContext, useState} from "react";
import {TaskManagerContext} from "../TaskManagerContext.jsx";
import UserSelector from "../UserSelector/index.jsx";

const EditModal = ({task, onModalClose}) => {
    const {editTask} = useContext(TaskManagerContext);
    const [editedTask, setEditedTask] = useState(task);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const handleInputChange = (e) => {
        setEditedTask({...editedTask, title: e.target.value});
    }

    const handleDescriptionChange = (e) => {
        setEditedTask({...editedTask, description: e.target.value});
    }

    const handlePriorityChange = (e) => {
        setEditedTask({...editedTask, priority: e.target.value});
    }

    const handleStatusChange = (e) => {
        setEditedTask({...editedTask, status: e.target.value});
    }

    const handleUserSelect = (newUser) => {
        setEditedTask({...editedTask, assignee: newUser});
    }

    const handleSave = () => {
        if (!editedTask.title) {
            setShowWarningMessage(true);
            setTimeout(() => setShowWarningMessage(false), 2000);
            return;
        }

        editTask(editedTask);
        onModalClose();
    };

    return (
        <div className={"modal"}>
            <div className="modal-container">
                {showWarningMessage && <p className={'warning-message'}>Please fill all required fields</p>}

                <div className="modal-header">
                    <span>Edit task</span>
                    <button className="close" onClick={onModalClose}>✖</button>
                </div>
                <label htmlFor="title">
                    Title
                    <input className={"title-modal"} value={editedTask.title} onChange={handleInputChange} disabled={task.status === 'blocked'}/>
                </label>
                <div className={"modal-body"}>
                    <label htmlFor="priority">
                        Priority
                        <select className={"select-modal priority-modal"} onChange={handlePriorityChange}
                                id={'priority'} value={editedTask.priority} disabled={task.status === 'blocked'}>
                            {PRIORITIES.map((priority) => (
                                <option key={priority}>{priority}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Status
                        <select className={"select-modal status-modal"} onChange={handleStatusChange}
                                value={editedTask.status}>
                            {STASUSES.map((status) => (
                                <option key={status}>{status}</option>
                            ))}
                        </select>
                    </label>
                </div>

                <label htmlFor="">
                    Description
                    <textarea className={"description-modal"} value={editedTask.description}
                              onChange={handleDescriptionChange} disabled={task.status === 'blocked'}></textarea>
                </label>

                <UserSelector assignee={editedTask.assignee} onHandleUserSelect={handleUserSelect} disabled={task.status === 'blocked'}/>

                <button onClick={handleSave} className="save-button">Save</button>
            </div>
        </div>

    )
}

export default EditModal;