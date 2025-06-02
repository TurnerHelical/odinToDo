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
        this.saveToLocalStorage();
        return newList;
    }

    createTask(taskInfo, dueDate, taskListId) {
        const targetList = this.taskLists.find(list => list.id === taskListId);
        if (targetList) {
            const task = targetList.addTask(taskInfo, dueDate);
            this.saveToLocalStorage();
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
    saveToLocalStorage() {
        const data = JSON.stringify(this.taskLists);
        localStorage.setItem('taskLists', data);
    }
    
    loadFromLocalStorage() {
        const raw = localStorage.getItem('taskLists');
        if (!raw) return;
        const parsed = JSON.parse(raw);
    
        this.taskLists = parsed.map(list => {
            const newList = new TaskList(list.title, list.taskDesc);
            newList.id = list.id;
            newList.taskArray = list.taskArray.map(task => {
                const t = new Task(task.taskInfo, task.dueDate, task.taskListId);
                t.id = task.id;
                t.finished = task.finished;
                return t;
            });
            return newList;
        });
    
        this.taskLists.forEach(list => this.page.addTaskListToSb(list));
    }
}

export {TaskListManager};