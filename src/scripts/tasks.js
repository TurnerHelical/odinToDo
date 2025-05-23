
class TaskList {

    constructor(title, taskDesc) {
        this.title = title;
        this.taskArray = [];
        this.taskDesc = taskDesc;
        this.id = 1;
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
        this.taskListId = taskListId
        this.id = 2;
    }



}


export { TaskList, Task };