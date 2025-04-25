import {useContext, useEffect, useState} from "react";
import './index.css'
import TaskList from "../TaskList/index.jsx";
import {TaskManagerContext} from "../TaskManagerContext.jsx";
import AddModal from "../AddModal/index.jsx";
import EditModal from "../EditModal/index.jsx";
import {LOCAL_STORAGE_KEY, STASUSES} from "../../constants/consts.js";

const ContentContainer = () => {
    const {tasks} = useContext(TaskManagerContext);
    const [addModalStatus, setAddModalStatus] = useState(null);
    const [editModalTask, setEditModalTask] = useState(null);
    // const [statuses, setStatuses] = useState(['todo', 'doing', 'done']);

    const handleAddModalChange = (status) => {
        setAddModalStatus((prev) => {
            if (!prev) return status
        });
    };
    const handleEditModalChange = (task) => {
        setEditModalTask((prev) => {
            if (!prev) return task
        })
    };

    useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks)), [tasks])

    return (
        <>
            <div className="content-container">
                {STASUSES.map((status) => (
                    <TaskList key={status} status={status} tasks={tasks.filter(task => task.status === status)}
                              onAddButtonClick={handleAddModalChange}
                              onEditButtonClick={handleEditModalChange}
                    />
                ))}
            </div>

            {!!addModalStatus && <AddModal onModalClose={handleAddModalChange} status={addModalStatus}/>}
            {!!editModalTask && (<EditModal task={editModalTask} onModalClose={handleEditModalChange}></EditModal>)}
        </>

    )
}


export default ContentContainer