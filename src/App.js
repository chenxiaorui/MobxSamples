import './App.css';

import TaskTableStore from './stores/task-table-store';
import { TaskTableContainer } from './containers/task-table-container';

const taskTableStore = new TaskTableStore();

const stores = {
  taskTableStore,
}

function App() {
  return (
    <Provider {...stores}>
      <div className="App">
        <TaskTableContainer></TaskTableContainer>
      </div>
    </Provider>
  );
}

export default App;
