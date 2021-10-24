import {observable} from 'mobx';

class TaskTableStore {
    constructor() {
        this.taskConnt = 0;
    }
    
    @observable taskConnt: number;
}

export default new TaskTableStore();