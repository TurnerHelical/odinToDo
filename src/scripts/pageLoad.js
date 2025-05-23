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
        tl.textContent = `Main Box: ${list.title}`;
        console.log('Added to Main Box:', tl);
    }
        return {addTaskListToSb, addTaskListToMainBox}
    
        
 }

    


export {domManip};