import '../styles/reset.css'
import '../styles/styles.css'
import {TaskListManager} from './taskListManager.js';

const manager = new TaskListManager();
window.manager = manager;

document.addEventListener('DOMContentLoaded', () => {
    manager.createTaskList('Test Title', 'Test Description');
});








