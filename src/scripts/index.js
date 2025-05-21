import '../styles/reset.css'
import '../styles/styles.css'
import {Dom} from './utils.js'
import {TaskList, Task} from './tasks.js'


const utils = new Dom();

document.addEventListener('DOMContentLoaded', () => {
    const testTask = new TaskList('Test', 'This is a test of the task list generator');
    testTask.addTaskToTaskList('this is a test task', '12/01');
    testTask.addTaskListToPage();
    console.log(testTask);
});