import 'antd/dist/antd.css'
import './App.css';

import TaskTableContainer from './containers/task-table-container';

const App = () => {
  return (
      <div className="App">
        <TaskTableContainer tableName="Task Table" />
      </div>
  );
}

export default App;
