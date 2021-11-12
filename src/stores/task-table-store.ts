import { observable, action, makeObservable, runInAction } from 'mobx';
import { TaskStatus, Task} from '../models/task';
import TaskManager, {ITaskRegister} from '../services/TaskManager';


class TaskTableStore implements ITaskRegister {
    private currentTaskIndex = 0;

    @observable taskCount: number = 0;
    @observable tasks: Task[] = [];

    constructor() {
        makeObservable(this);
        TaskManager.regist(this);
    }

    @action
    getEvent = (changedTask: Task) => {
        this.tasks.forEach((task) => {
            if(task.index === changedTask.index) {
                runInAction(() => {
                    task.status = changedTask.status;
                    task.progress = changedTask.progress;
                    this.taskCount = this.tasks.length;
                });
            }
        });
    }

    @action 
    addTask = () => {
        let newTask = {index: this.currentTaskIndex, status: TaskStatus.Pending, progress: 0};
        this.currentTaskIndex += 1;
        this.tasks.push(newTask);
        this.taskCount = this.tasks.length;
        TaskManager.addTask(newTask);
    }

}

export default new TaskTableStore();
