document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const newTask = taskInput.value.trim();

    if(newTask) {
        const listItem = createTaskElement(newTask);
        document.getElementById('todo-list').appendChild(listItem);
        taskInput.value = ''; // Clear input field
        saveTasks();
    } else {
        alert('Please enter a task.');
    }
}

function createTaskElement(task) {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.onclick = function() {
        toggleTask.apply(this);
        saveTasks();
    };

    const label = document.createElement('label');
    label.innerText = task;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '&times;';
    deleteButton.className = 'delete';
    deleteButton.onclick = function() {
        deleteTask.apply(this);
        saveTasks();
    };

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    return listItem;
}

function toggleTask() {
    const listItem = this.parentNode;
    listItem.style.textDecoration = this.checked ? 'line-through' : 'none';
}

function deleteTask() {
    const listItem = this.parentNode;
    listItem.remove();
    saveTasks();
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#todo-list li').forEach(function(item) {
        tasks.push({
            text: item.childNodes[1].innerText, // label блок
            completed: item.firstChild.checked
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for(const task of tasks) {
        const listItem = createTaskElement(task.text);
        listItem.firstChild.checked = task.completed;
        if(task.completed) {
            listItem.style.textDecoration = 'line-through';
        }
        document.getElementById('todo-list').appendChild(listItem);
    }
}