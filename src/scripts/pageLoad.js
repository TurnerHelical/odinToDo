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
        const header = utils.createAndAppend('#todoBox', 'h2');
        header.innerHTML = 'Todo\'s'
        const tl = utils.createAndAppend('#todoBox', 'div', 'id', `tlMainBox`);
        tl.setAttribute('data-id', list.id);
        const title = utils.createAndAppend(`#tlMainBox`, 'h3', 'class', 'todoTitle');
        title.textContent = `${list.title}`;
        const desc = utils.createAndAppend('#tlMainBox', 'p', 'class', 'todoDesc');
        desc.textContent = `${list.taskDesc}`;
        utils.createAndAppend('#tlMainBox', 'div', 'id', 'todoCtr');
        const sortedTasks = [...list.taskArray].sort((a, b) => {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
        for (const task of sortedTasks) {
            const existingDateHeader = utils.findElementByAttr(`[data-id="${task.dueDate}"]`);

            if (!existingDateHeader) {
                const date = utils.createAndAppend('#todoCtr', 'h4', 'id', `date-${task.dueDate}`);
                date.setAttribute('data-id', task.dueDate);

                
                const [year, month, day] = task.dueDate.split('-');
                const localDate = new Date(+year, +month - 1, +day);
                const formattedDate = localDate.toLocaleDateString('en-US');

                date.textContent = formattedDate;
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

                        <div id="modalButtons">
                            <button id ='tasklistSubmit'>Submit</button>
                            <button id = 'tasklistCancel'>Cancel</button>
                        </div>`;
        utils.findElement('#form').innerHTML = formInfo;
        const submitBtn = utils.findElement('#tasklistSubmit');
        const cancel = utils.findElement('#tasklistCancel');
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            let title = utils.findElement('#tasklistName').value;
            let desc = utils.findElement('#taskDesc').value;
            const newList = manager.createTaskList(title, desc);
            utils.toggleClass('#formContainer', 'disable');
            manager.moveTaskListToMB(newList.id);
        });
        cancel.addEventListener('click', function (e) {
            e.preventDefault();
            utils.toggleClass('#formContainer', 'disable');
        });
    }

    const taskModal = () => {
        utils.clearContent('#form');
        utils.toggleClass('#formContainer', 'disable');
        const formInfo = `
                    <h2>Add ToDo List task</h2>

                        <div>
                            <label for="taskInfo" class="textlabel">Details of the task: </label>
                            <textarea name="taskInfo" id="taskInfo" rows="4" cols="50"></textarea>
                        </div>

                        <div>
                            <label for="taskDueDate" class="textlabel">Due Date: </label>
                            <input type="date" name="taskDueDate" id="taskDueDate">
                        </div>

                        <div id="modalButtons">
                            <button id= 'taskSubmit'>Submit</button>
                            <button id= 'taskCancel'>Cancel</button>
                        </div>
`;
        utils.findElement('#form').innerHTML = formInfo;
        const submitBtn = utils.findElement('#taskSubmit');
        const cancel = utils.findElement('#taskCancel');
        submitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            let task = utils.findElement('#taskInfo').value;
            let dueDate = utils.findElement('#taskDueDate').value;
            let listId = utils.findElement('#tlMainBox').getAttribute('data-id');
            manager.createTask(task, dueDate, listId);
            utils.toggleClass('#formContainer', 'disable');
            manager.moveTaskListToMB(listId);
        });
        cancel.addEventListener('click', function (e) {
            e.preventDefault();
            utils.toggleClass('#formContainer', 'disable');

        });
    }

    const createListButton = () => {

        const listBtn = utils.findElement('#createList');
        listBtn.addEventListener('click', listModal);
    }

    const addTaskButton = () => {

        const taskBtn = utils.findElement('#addTask');
        taskBtn.addEventListener('click', taskModal);

    }
    return { addTaskListToSb, addTaskListToMainBox, createListButton, addTaskButton }
}








export { domManip };