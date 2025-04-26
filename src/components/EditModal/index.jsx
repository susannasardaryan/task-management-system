import { PRIORITIES, STASUSES } from '../../constants/consts.js';
import { useContext, useState } from "react";
import { TaskManagerContext } from "../TaskManagerContext.jsx";
import UserSelector from "../UserSelector/index.jsx";

const EditModal = ({ task, onModalClose }) => {
    const { editTask } = useContext(TaskManagerContext);
    const [editedTask, setEditedTask] = useState(task);
    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const handleChange = (e, field) => {
        setEditedTask({ ...editedTask, [field]: e.target.value });
    }

    const handleUserSelect = (user) => {
        setEditedTask((prev) => ({ ...prev, assignee: user }));
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
                    <input className={"title-modal"} value={editedTask.title} onChange={(e) => handleChange(e, 'title')} disabled={task.status === 'blocked'} />
                </label>
                <div className={"modal-body"}>
                    <label htmlFor="priority">
                        Priority
                        <select className={"select-modal priority-modal"} onChange={(e) => handleChange(e, 'priority')}
                            id={'priority'} value={editedTask.priority} disabled={task.status === 'blocked'}>
                            {PRIORITIES.map((priority) => (
                                <option key={priority}>{priority}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Status
                        <select className={"select-modal status-modal"} onChange={(e) => handleChange(e, 'status')}
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
                        onChange={(e) => handleChange(e, 'description')} disabled={task.status === 'blocked'}></textarea>
                </label>

                <UserSelector assignee={editedTask.assignee} onHandleUserSelect={handleUserSelect} disabled={task.status === 'blocked'} />

                <button onClick={handleSave} className="save-button">Save</button>
            </div>
        </div>

    )
}

export default EditModal;