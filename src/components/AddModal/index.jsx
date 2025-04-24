import "./index.css";
import {PRIORITIES, USERS, DEFAULT_TASK, LOCAL_STORAGE_KEY} from "../../constants/consts";
import {use, useContext, useRef, useState} from "react";
import {TaskManagerContext} from "../TaskManagerContext";

const AddModal = ({onModalClose, status}) => {
    console.log('rendered');

    const {addTask} = useContext(TaskManagerContext);
    const generateId = () => Math.random();

    let task = {...DEFAULT_TASK, id: generateId()};

    const titleInputRef = useRef("");
    const descriptionRef = useRef("");
    const prioritySelectRef = useRef("");

    const handleSave = () => {
        task = {
            ...task,
            title: titleInputRef.current.value,
            description: descriptionRef.current.value,
            priority: prioritySelectRef.current.value,
            status,
        };
        addTask(task);
        onModalClose();
    };

    return (
        <div className={"modal"}>
            <div className="modal-container">
                <div className="modal-header">
                    Add New Task
                    <button className="close" onClick={onModalClose}>✖</button>
                </div>
                <label htmlFor="title">Title
                    <input className={"title-modal"} ref={titleInputRef}/>
                </label>
                <select className={"select-modal"} ref={prioritySelectRef}>
                    {PRIORITIES.map((priority) => (
                        <option key={priority}>{priority}</option>
                    ))}
                </select>

                <label htmlFor="">
                    Description
                    <textarea className={"description-modal"} ref={descriptionRef}></textarea>
                </label>

                <select className={"users"}>
                    {USERS.map((user) => (
                        <option key={user}>{user}</option>
                    ))}
                </select>
                <button onClick={handleSave} className="save-button">
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddModal;
