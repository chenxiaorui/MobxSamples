import React from "react";
import { Button } from "antd";
import "./task-table-container.scss";

import {TaskStatus} from '../stores/task-table-store';
import TaskTable from "../modules/task-table";

interface Props {
    tableName: string;
}

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
        // const testDataSource = [{
        //     index: 1,
        //     status: 'Pending',
        //     progress: 2
        // }];

        return (
            <div className="task-table-container">
                <Button>Add one task</Button>
                <TaskTable></TaskTable>
            </div>
        );
    }
}

export default TaskTableContainer;
