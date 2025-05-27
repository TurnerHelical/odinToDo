import '../styles/reset.css'
import '../styles/styles.css'
import { domManip } from './pageLoad.js';
import {TaskListManager} from './taskListManager.js';

const manager = new TaskListManager();
window.manager = manager;

const maip = domManip();
window.maip = maip;



document.addEventListener('DOMContentLoaded', () => {
    const list = manager.createTaskList('test', 'testing');
    manager.createTask('test this is a test of the tasks adding to the main page', '12-02', list.id);
    manager.createTask('test this is a test of the tasks adding to the main page', '12-02', list.id);
    manager.createTask('test this is a test of the tasks adding to the main page', '12-04', list.id);
    manager.moveTaskListToMB(list.id);            // use correct ID
});







