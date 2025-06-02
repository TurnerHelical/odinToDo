import '../styles/reset.css'
import '../styles/styles.css'
import { domManip } from './pageLoad.js';
import {TaskListManager} from './taskListManager.js';

const manager = new TaskListManager();
window.manager = manager;

const manip = domManip();



document.addEventListener('DOMContentLoaded', () => {
    manip.createListButton();
    manip.addTaskButton();
    manip.clickableSb();
});







