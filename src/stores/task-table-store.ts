import { observable, action } from 'mobx';
import { createContext } from "react";

export enum TaskStatus {
    Running,
    Pending,
    Complete
}

export interface Task {
    index: number;
    status: TaskStatus;
    progress: number
}

class TaskTableStore {
    @observable taskConnt: number = 0;

    @observable tasks: Task[] = [];

    @action addTask = () => {
        let newTask = {index: 1, status: TaskStatus.Running, progress: 0};
        this.tasks.push(newTask);
    }

}

export default createContext(new TaskTableStore());
