import '../styles/reset.css'
import '../styles/styles.css'
import {Dom} from './utils.js'
import {TaskList, Task} from './tasks.js'

const taskListArr = [];

function createTaskList(title, taskDesc) {
    let myLists = new TaskList(title, taskDesc);
    myLists.addTaskListToPage();
    taskListArr.push(myLists);
    return 
}




document.addEventListener('DOMContentLoaded', () => {
    const myTasks1 = createTaskList('test', 'test test')
    const myTasks = createTaskList('test1', 'Testing Testing Testing')
    console.log(taskListArr);
});