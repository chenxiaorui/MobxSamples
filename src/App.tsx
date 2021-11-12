import 'antd/dist/antd.css'
import './App.css';

import TaskTableContainer from './containers/task-table-container';
import TaskTableStore from './stores/task-table-store';

const App = () => {
  const store = {
    taskTableStore: TaskTableStore,
  }
  return (
      <div className="App">
        <TaskTableContainer tableName="Task Table" store={store} />
      </div>
  );
}

export default App;
