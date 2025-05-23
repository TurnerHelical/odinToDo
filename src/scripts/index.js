import '../styles/reset.css'
import '../styles/styles.css'
import { domManip } from './pageLoad.js';
import {TaskListManager} from './taskListManager.js';

const manager = new TaskListManager();
window.manager = manager;

const maip = domManip();
window.maip = maip;

document.addEventListener('DOMContentLoaded', () => {
    
});








