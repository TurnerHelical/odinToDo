import '../styles/reset.css'
import '../styles/styles.css'
import {Dom} from './utils.js'
import {TaskList, Task} from './tasks.js'

const taskListArr = [];

function createTaskList(title, taskDesc) {
    let myLists = new TaskList(title, taskDesc);
    myLists.addTaskListToPage();
    taskListArr.push(myLists); 
}




document.addEventListener('DOMContentLoaded', () => {
    createTaskList('test', 'test test');
    createTaskList('test1', 'Testing Testing Testing');
    console.log(taskListArr);
});
