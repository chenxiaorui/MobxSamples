import React from "react";
import { Button } from "antd";

import { observer } from "mobx-react";
import { toJS } from "mobx";

import "./task-table-container.scss";
import TaskTable from "../modules/task-table";


interface Props {
    tableName: string;
    store: any;
}

@observer
class TaskTableContainer extends React.Component<Props> {
    getTableData = () => {
        const testDataSource = [{
            index: 1,
            status: 'Pending',
            progress: 2
        }];
        return testDataSource;
    }
    render() {
        const { taskTableStore } = this.props.store;
        const { tasks, taskCount, addTask } = taskTableStore;
        return (
            <div className="task-table-container">
                <Button onClick={addTask}>Add one task</Button>
                <div>{`Task count: ${taskCount}`}</div>
                <TaskTable source={toJS(tasks)}></TaskTable>
            </div>
        );
    }
}

export default TaskTableContainer;
