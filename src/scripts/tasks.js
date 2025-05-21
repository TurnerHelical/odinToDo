import {Dom} from './utils.js'

const utils = new Dom;

class TaskList {

    constructor(title, taskDesc) {
        this.title = title;
        this.taskArray = [];
        this.taskDesc = taskDesc;
        this.id = crypto.randomUUID();
    }

    taskListBoxDisplay() {

    }

    addTaskToTaskList(taskDesc, dueDate) {
        let task = Task.createTask(taskDesc, dueDate, this.id);
        this.taskArray.push(task);
    }

    addTaskListToPage() {
        utils.createAndAppend('#listCtr', 'div', 'class', `taskList task-${this.id}`);
        let sbTaskList = utils.createAndAppend(`.task-${this.id}`, 'h3', 'class', 'sbTaskTitle');
        sbTaskList.innerHTML = `${this.title}`;
        let sbTaskDesc = utils.createAndAppend(`.task-${this.id}`, 'p', 'class', 'sbTaskDesc');
        sbTaskDesc.innerHTML = `${this.taskDesc}`;


    }
}

class Task {

    constructor(taskDesc, dueDate, taskListId) {
        this.taskDesc = taskDesc;
        this.dueDate = dueDate;
        this.taskListId = taskListId
        this.id = crypto.randomUUID();
    }

    static createTask(taskDesc, dueDate, taskListId) {

        return new Task(taskDesc, dueDate, taskListId);
        
    }

}


export {TaskList, Task};