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

    addTaskToTaskList(taskInfo, dueDate) {
        let task = Task.createTask(taskInfo, dueDate, this.id);
        this.taskArray.push(task);
    }

    addTaskListToPage() {
        utils.createAndAppend('#listCtr', 'div', 'class', `taskList task-${this.id}`);
        let sbTaskList = utils.createAndAppend(`.task-${this.id}`, 'h3', 'class', 'sbTaskTitle');
        sbTaskList.innerHTML = `${this.title}`;
        let sbTaskDesc = utils.createAndAppend(`.task-${this.id}`, 'p', 'class', 'sbTaskDesc');
        sbTaskDesc.innerHTML = `${this.taskDesc}`;
    }

    openTaskListInToDoBox(taskListId) {

    }
}

class Task {

    constructor(taskInfo, dueDate, taskListId) {
        this.taskInfo = taskInfo;
        this.dueDate = dueDate;
        this.taskListId = taskListId
        this.id = crypto.randomUUID();
    }

    static createTask(taskInfo, dueDate, taskListId) {

        return new Task(taskInfo, dueDate, taskListId);
        
    }

}


export {TaskList, Task};