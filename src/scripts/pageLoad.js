import { Dom } from './utils.js'
import { TaskListManager } from './taskListManager.js';
const utils = new Dom();
const manager = new TaskListManager;


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

        } else {
            let mbTask = utils.createAndAppend(`#ul-${task.dueDate}`, 'li', 'class', 'task');
            mbTask.setAttribute('data-id', task.id);
            const radio = document.createElement('input');
            radio.setAttribute('type', 'radio');
            mbTask.appendChild(radio);
            mbTask.appendChild(document.createTextNode(` ${task.taskInfo}`));
        }
    }

    const listModal = () => {

        utils.clearContent('#form');
        utils.toggleClass('#formContainer', 'disable');
        const formInfo = `
                    <h2>Add ToDo List</h2>

                        <div>
                            <label for="tasklistName" class="textlabel">Name for the Todo list: </label>
                            <input type="text" name="tasklistName" id="tasklistName">
                        </div>

                        <div>
                            <label for="taskDesc" class="textlabel">Description for this Todo List: </label>
                            <textarea name="taskDesc" id="taskDesc" rows="4" cols="50"></textarea>
                        </div>

                        <button id="tasklistSubmit">Submit</button>`;
        utils.findElement('#form').innerHTML = formInfo;
        const submitBtn = utils.findElement('#tasklistSubmit');
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            let title = utils.findElement('#tasklistName').value;
            let desc = utils.findElement('#taskDesc').value;
            manager.createTaskList(title, desc);
            utils.toggleClass('#formContainer', 'disable');
        });
    }

    const createListButton = () => {

        const listBtn = utils.findElement('#createList');
        listBtn.addEventListener('click', listModal);
    }

    const addTaskButton = () => {

        const taskBtn = utils.findElement('#createList');
        taskBtn.addEventListener('click', taskModal());

    }
    return { addTaskListToSb, addTaskListToMainBox, createListButton, addTaskButton }
}








export { domManip };