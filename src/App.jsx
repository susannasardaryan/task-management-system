import "./App.css";
import ContentContainer from "./components/ContentContainer/index.jsx";
import { TaskManagerProvider, TaskManagerContext } from "./components/TaskManagerContext.jsx";

function App() {
  return (
    <>
      <h1 className={'header'}>Task Management System</h1>
      <TaskManagerProvider value={TaskManagerContext}>
        <ContentContainer />
      </TaskManagerProvider>
    </>
  );
}

export default App;
