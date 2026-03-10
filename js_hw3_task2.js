function addTask() {
    const text = document.getElementById('todo-input').value;
    if (text === '') return;

    const li = document.createElement('li');
    li.textContent = text;

    const date = document.getElementById('todo-date').value;
    if (date !== '') {
    const dateSpan = document.createElement('span');
    dateSpan.textContent = date;
    li.appendChild(dateSpan);
}

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function() { toggleDone(checkbox); };
    li.prepend(checkbox);

    const btn = document.createElement('button');
    btn.textContent = 'X';
    btn.onclick = function() { removeTask(btn); };
    li.appendChild(btn);


    document.getElementById('todo-list').appendChild(li);
    document.getElementById('todo-input').value = '';
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleDone(checkbox) {
    checkbox.parentElement.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
}