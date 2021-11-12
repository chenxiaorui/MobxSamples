// import React from "react";
import { observer } from "mobx-react";
import { Table } from "antd";
import { Task } from '../models/task';
import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";

const columns = [
    {
      title: 'Index',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
    },
];

interface Props {
    source: Task[];
}

const TaskTable = (props: Props) => {
    const dataSource = props.source.map((task) => {
        return {
            index: task.index,
            status: task.status,
            progress: `${task.progress}%`,
        }
    });

    return <Table dataSource={dataSource} columns={columns} />;
};

export default TaskTable;
