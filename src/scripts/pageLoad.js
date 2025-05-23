import {Dom} from './utils.js'

const utils = new Dom();


function domManip() {

    
    const addTaskListToSb = (list) => {
        utils.createAndAppend('#listCtr', 'div', 'class', `taskList task-${list.id}`);
        let sbTaskList = utils.createAndAppend(`.task-${list.id}`, 'h3', 'class', 'sbTaskTitle');
        sbTaskList.innerHTML = `${list.title}`;
        let sbTaskDesc = utils.createAndAppend(`.task-${list.id}`, 'p', 'class', 'sbTaskDesc');
        sbTaskDesc.innerHTML = `${list.taskDesc}`;
    }

    const addTaskListToMainBox = (list) => {
        const tl = utils.createAndAppend('#todoBox', 'div', 'id', `tlMainBox`);
        tl.setAttribute('data-id', list.id);
        const title = utils.createAndAppend(`#tlMainBox`, 'h3', 'class', 'todoTitle');
        title.textContent = `${list.title}`;
        const desc = utils.createAndAppend('#tlMainBox', 'p', 'class', 'todoDesc');
        desc.textContent = `${list.taskDesc}`;
        utils.createAndAppend('#tlMainBox', 'div', 'id', 'todoCtr');
        utils.createAndAppend('#todoCtr', 'ul', 'id', 'tasks'); 
        for (const task of list.taskArray) {
            let mbTask = utils.createAndAppend('#tasks', 'li', 'class', 'task');
            mbTask.setAttribute('data-id', task.id);
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            mbTask.appendChild(radio);
            mbTask.appendChild(document.createTextNode(` ${task.taskInfo}`));
        }
        console.log('Added to Main Box:', tl);
    }
        return {addTaskListToSb, addTaskListToMainBox}
    
        
 }

    


export {domManip};