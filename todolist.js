let useObjectModel = true; 
/** @type {Array<string> | Array<{task_id:number,text:string,done:boolean}>} */
const tasks = [];

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const listEl = document.querySelector('.listTasks');

function renderTask(task) {
  const taskId = useObjectModel ? task.task_id : tasks.length - 1;

  const wrapper = document.createElement('div');
  wrapper.className = 'task';
  if (useObjectModel) {
    wrapper.dataset.taskId = String(taskId);
  }

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove';
  removeBtn.type = 'button';
  removeBtn.setAttribute('aria-label', 'Delete task');
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `task-${taskId}`;

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = useObjectModel ? task.text : String(task);

  if (useObjectModel && task.done) {
    label.classList.add('done');
    checkbox.checked = true;
  }

  wrapper.appendChild(removeBtn);
  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  listEl.appendChild(wrapper);

  checkbox.addEventListener('change', () => doneTask(taskId, checkbox.checked, label));
  removeBtn.addEventListener('click', () => deleteTask(taskId, wrapper));
}

function addTask(event) {
  if (event) event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    input.focus();
    return;
  }

  if (useObjectModel) {
    const task = { task_id: tasks.length, text, done: false };
    tasks.push(task);
    renderTask(task);
  } else {
    tasks.push(text);
    renderTask(text);
  }

  input.value = '';
  input.focus();
}

function doneTask(taskId, isChecked, labelEl) {
  if (!useObjectModel) return; 
  const task = tasks.find(t => t.task_id === taskId);
  if (!task) return;
  task.done = Boolean(isChecked);
  if (task.done) {
    labelEl.classList.add('done');
  } else {
    labelEl.classList.remove('done');
  }
}

function deleteTask(taskId, wrapperEl) {
  if (useObjectModel) {
    const index = tasks.findIndex(t => t.task_id === taskId);
    if (index !== -1) tasks.splice(index, 1);
  } else {
    const nodes = Array.from(listEl.children);
    const index = nodes.indexOf(wrapperEl);
    if (index !== -1) tasks.splice(index, 1);
  }
  wrapperEl.remove();
}

form.addEventListener('submit', addTask);
