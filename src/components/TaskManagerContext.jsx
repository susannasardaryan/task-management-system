import {createContext, useReducer} from "react";
import {LOCAL_STORAGE_KEY} from "../constants/consts.js";

export const TaskManagerContext = createContext({
    tasks: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
});

export const TaskManagerProvider = ({children}) => {
    const reducer = (state, action) => {
        const {type, payload} = action;

        switch (type) {
            case "add-task":
                return [...state, payload.task];
            case "remove-task":
                return state.filter((task) => task.id !== payload.id);
            case "edit-task":
                return state.map((task) => {
                    if (task.id === payload.editedTask.id) return payload.editedTask;
                    return task;
                });
        }
    };
    const [tasks, dispatch] = useReducer(reducer, []);

    const addTask = (task) => {
        dispatch({
            type: "add-task",
            payload: {task},
        });
    };

    const removeTask = (id) => {
        dispatch({
            type: "remove-task",
            payload: {id},
        });
    };

    const editTask = (editedTask) => {
        dispatch({
            type: "edit-task",
            payload: {editedTask},
        });
    };

    return (
        <TaskManagerContext.Provider
            value={{
                tasks,
                addTask,
                editTask,
                removeTask,
            }}
        >
            {children}
        </TaskManagerContext.Provider>
    );
};
