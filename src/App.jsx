import "./App.css";
import ContentContainer from "./components/ContentContainer/index.jsx";
import {TaskManagerProvider, TaskManagerContext} from "./components/TaskManagerContext.jsx";
import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd'

function App() {
    return (
        <>
            <h1 className={'header'}>Task Management System</h1>
            <TaskManagerProvider value={TaskManagerContext}>
                <DndProvider backend={HTML5Backend}>
                    <ContentContainer/>
                </DndProvider>
            </TaskManagerProvider>
        </>
    );
}

export default App;
