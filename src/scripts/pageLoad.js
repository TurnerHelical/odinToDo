import { Dom } from './utils.js'

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
        utils.clearContent('#todoBox');
        const tl = utils.createAndAppend('#todoBox', 'div', 'id', `tlMainBox`);
        tl.setAttribute('data-id', list.id);
        const title = utils.createAndAppend(`#tlMainBox`, 'h3', 'class', 'todoTitle');
        title.textContent = `${list.title}`;
        const desc = utils.createAndAppend('#tlMainBox', 'p', 'class', 'todoDesc');
        desc.textContent = `${list.taskDesc}`;
        utils.createAndAppend('#tlMainBox', 'div', 'id', 'todoCtr');
        for (const task of list.taskArray) {
            const existingDateHeader = utils.findElementByAttr(`[data-id="${task.dueDate}"]`);

            if (!existingDateHeader) {
                const date = utils.createAndAppend('#todoCtr', 'h4', 'id', `date-${task.dueDate}`);
                date.setAttribute('data-id', task.dueDate);
                date.textContent = task.dueDate;
                addTaskToMB(task);
            } else {
                addTaskToMB(task);
            }
               

            
        }
   
    }

    const addTaskToMB = (task) => {

        const existingUL = utils.findElement(`#ul-${task.dueDate}`);
        if (!existingUL) {
            const dateUl = utils.createAndAppend(`#date-${task.dueDate}`, 'ul', 'id', `ul-${task.dueDate}`);
            utils.toggleClass(`#ul-${task.dueDate}`, 'tasks');
            let mbTask = utils.createAndAppend(`#ul-${task.dueDate}`, 'li', 'class', 'task');
            mbTask.setAttribute('data-id', task.id);
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            mbTask.appendChild(radio);
            mbTask.appendChild(document.createTextNode(` ${task.taskInfo}`));
    
        } else  {
            let mbTask = utils.createAndAppend(`#ul-${task.dueDate}`, 'li', 'class', 'task');
            mbTask.setAttribute('data-id', task.id);
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            mbTask.appendChild(radio);
            mbTask.appendChild(document.createTextNode(` ${task.taskInfo}`));
        }
    }
    return { addTaskListToSb, addTaskListToMainBox }
}

    
        
 




export { domManip };