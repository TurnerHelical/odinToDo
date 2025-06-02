
class TaskList {

    constructor(title, taskDesc) {
        this.title = title;
        this.taskArray = [];
        this.taskDesc = taskDesc;
        this.id = crypto.randomUUID();
    }

   

    addTask(taskInfo, dueDate) {
        const task = new Task(taskInfo, dueDate, this.id);
        this.taskArray.push(task);
        return task;
    }


}

class Task {

    constructor(taskInfo, dueDate, taskListId) {
        this.taskInfo = taskInfo;
        this.dueDate = dueDate;
        this.taskListId = taskListId;
        this.id = crypto.randomUUID();
        this.finished = false;
    }



}


export { TaskList, Task };