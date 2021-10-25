// import React from "react";
import { observer } from "mobx-react";
import { Table } from "antd";


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

const TaskTable = () => {
    const testDataSource = [{
        index: 1,
        status: 'Pending',
        progress: 2
    }];

    return <Table dataSource={testDataSource} columns={columns} />;
};

export default observer(TaskTable);
