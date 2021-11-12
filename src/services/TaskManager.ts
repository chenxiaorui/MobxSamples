import { TaskStatus, Task} from '../models/task';

export interface ITaskRegister {
    getEvent(task: Task): void;
}

class TaskManager {
    maxRunningTask: number = 4;
    runningTasks: Task[] = [];
    pendingTasks: Task[] = [];
    completeTasks: Task[] = [];

    registers: ITaskRegister[] = [];

    constructor() {
        setInterval(() => {
            if (this.pendingTasks.length > 0 && this.runningTasks.length < this.maxRunningTask) {
                this.runTask(this.pendingTasks[0]);
                this.pendingTasks.shift();
            }
        }, 1000);
    }

    regist(taskRegister: ITaskRegister) {
        this.registers.push(taskRegister);
    }
    

    addTask = (task: Task) => {
        switch (task.status) {
            case TaskStatus.Pending:
                this.pendingTasks.push(task);
                break;
            case TaskStatus.Running:
                this.runningTasks.push(task);
                break;
            case TaskStatus.Complete:
                this.completeTasks.push(task);
                break;
            default:
                break;
        }
    }

    postEvent = (task: Task) => {
        this.registers.forEach(register => {
            register.getEvent(task);
        });
    }

    private runTask = (task: Task | undefined) => {
        if (!task) return;
        if(task.status === TaskStatus.Pending) {
            this.runningTasks.push(task);
            this.startTaskJob(task);
        }
    }

    private startTaskJob = (task: Task) => {
        task.status = TaskStatus.Running;

        const handle = setInterval(() => {
            task.progress += 1;
            this.postEvent(task);
            
            if(task.progress === 100) {
                task.status = TaskStatus.Complete;
                const index = this.runningTasks.indexOf(task);
                if (index > -1) {
                    this.runningTasks.splice(index, 1);
                }
                this.postEvent(task);
                clearInterval(handle);
            }
        }, 100);


    }

}

export default new TaskManager();