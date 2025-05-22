import {Dom} from './utils.js'
import { Task, TaskList } from './tasks.js';

const utils = new Dom();

function domManip() {

    const taskListArr = []

    const createTaskList = (title, taskDesc) => {
        let myLists = new TaskList(title, taskDesc);
        myLists.addTaskListToPage();
        taskListArr.push(myLists); 
    }

    const createTask = (taskInfo, dueDate, taskListId) => {

        let newTask = new Task(taskInfo, dueDate, taskListId);
        for (const taskList of taskListArr) {
            if (taskListId === taskList.id) {
                taskList.taskArray.push(newTask)
            } else {
                return
            }
        }
        
    }

    return {createTaskList, createTask};
};

export {domManip};