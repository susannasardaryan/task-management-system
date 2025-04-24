import {useContext, useState} from "react";
import './index.css'
import TaskList from "../TaskList/index.jsx";
import {TaskManagerContext} from "../TaskManagerContext.jsx";
import AddModal from "../AddModal/index.jsx";
import EditModal from "../EditModal/index.jsx";
import {LOCAL_STORAGE_KEY} from "../../constants/consts.js";

const ContentContainer = () => {
    const {tasks} = useContext(TaskManagerContext);
    const [addModalStatus, setAddModalStatus] = useState(null);
    const [editModalTask, setEditModalTask] = useState(null);

    const handleAddModalChange = (status) => {
        setAddModalStatus((prev) => {
            if (!prev) return status
        });

        if (!addModalStatus) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
        }
    };
    const handleEditModalChange = (task) => {
        setEditModalTask((prev) => {
            if (!prev) return task
        })
    };

    return (
        <>
            <div className="content-container">
                <TaskList status={'todo'} tasks={tasks.filter(task => task.status === 'todo')}
                          onAddButtonClick={handleAddModalChange}
                          onEditButtonClick={handleEditModalChange}
                />
                <TaskList status={'doing'} tasks={tasks.filter(task => task.status === 'doing')}
                          onAddButtonClick={handleAddModalChange}
                          onEditButtonClick={handleEditModalChange}
                />
                <TaskList status={'done'} tasks={tasks.filter(task => task.status === 'done')}
                          onAddButtonClick={handleAddModalChange}
                          onEditButtonClick={handleEditModalChange}
                />
            </div>

            {!!addModalStatus && <AddModal onModalClose={handleAddModalChange} status={addModalStatus}/>}
            {!!editModalTask && (<EditModal task={editModalTask} onModalClose={handleEditModalChange}></EditModal>)}
        </>

    )
}


export default ContentContainer