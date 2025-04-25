import "./index.css";
import {PRIORITIES, DEFAULT_TASK} from "../../constants/consts";
import {useContext, useRef, useState} from "react";
import {TaskManagerContext} from "../TaskManagerContext";
import UserSelector from "../UserSelector/index.jsx";

const AddModal = ({onModalClose, status}) => {
    const {addTask} = useContext(TaskManagerContext);
    const generateId = () => Math.random();

    let task = {...DEFAULT_TASK, id: generateId()};

    const titleInputRef = useRef('');
    const descriptionRef = useRef('');
    const prioritySelectRef = useRef('low');
    const [assignee, setAssignee] = useState({});

    const [showWarningMessage, setShowWarningMessage] = useState(false);

    const handleUserSelect = (user) => {
        setAssignee(user);
    }

    const handleSave = () => {
        if(!titleInputRef.current.value) {
            titleInputRef.current.focus();
            setShowWarningMessage(true);
            setTimeout(() => setShowWarningMessage(false), 2000);
            return;
        }

        task = {
            ...task,
            title: titleInputRef.current.value,
            description: descriptionRef.current.value,
            priority: prioritySelectRef.current.value,
            assignee,
            status,
        };

        addTask(task);
        onModalClose();
    };

    return (
        <div className={"modal"}>
            <div className="modal-container">
                {showWarningMessage && <p className={'warning-message'}>Please fill all required fields</p>}
                <div className="modal-header">
                    Add New Task
                    <button className="close" onClick={onModalClose}>✖</button>
                </div>
                <label htmlFor="title">Title
                    <input className={"title-modal"} ref={titleInputRef} type={"text"} required={true}/>
                </label>
                <select className={"select-modal"} ref={prioritySelectRef}>
                    {PRIORITIES.map((priority) => (
                        <option key={priority}>{priority}</option>
                    ))}
                </select>

                <label htmlFor="description">
                    Description
                    <textarea className={"description-modal"} ref={descriptionRef} id={'description'}></textarea>
                </label>

                <UserSelector assignee={assignee} onHandleUserSelect={handleUserSelect}/>

                <button onClick={handleSave} className="save-button">
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddModal;
