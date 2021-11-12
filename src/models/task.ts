export enum TaskStatus {
    Running = 'Running',
    Pending = 'Pending',
    Complete = 'Complete'
}

export interface Task {
    index: number;
    status: TaskStatus;
    progress: number
}