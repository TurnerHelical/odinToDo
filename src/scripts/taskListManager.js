import { TaskList } from './tasks.js';
import { domManip } from './pageLoad.js';

class TaskListManager {
    constructor() {
        this.taskLists = [];
        this.page = domManip();
    }

    createTaskList(title, taskDesc) {
        const newList = new TaskList(title, taskDesc);
        this.taskLists.push(newList);
        this.page.addTaskListToSb(newList);
        return newList;
    }

    createTask(taskInfo, dueDate, taskListId) {
        const targetList = this.taskLists.find(list => list.id === taskListId);
        if (targetList) {
            const task = targetList.addTask(taskInfo, dueDate);
            return task;
        }
        return null;
    }

    moveTaskListToMB(id) {
        const targetList = this.taskLists.find(list => list.id === id);
        if (targetList) {
            this.page.addTaskListToMainBox(targetList);
        }
        return null;
    }

  

    getAllLists() {
        return this.taskLists;
    }
}

export {TaskListManager};