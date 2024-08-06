document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center p-2 border-b';

            const span = document.createElement('span');
            span.textContent = todo.text;
            span.className = `flex-1 ${todo.completed ? 'line-through' : ''}`;
            li.appendChild(span);

            const div = document.createElement('div');

            const completeBtn = document.createElement('button');
            completeBtn.innerHTML = '<i class="fas fa-check"></i>';
            completeBtn.className = 'bg-green-500 text-white p-1 rounded mr-2';
            completeBtn.onclick = () => toggleComplete(index);
            div.appendChild(completeBtn);

            const editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            editBtn.className = 'bg-yellow-500 text-white p-1 rounded mr-2';
            editBtn.onclick = () => enableEdit(span, index);
            div.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.className = 'bg-red-500 text-white p-1 rounded';
            deleteBtn.onclick = () => deleteTask(index);
            div.appendChild(deleteBtn);

            li.appendChild(div);
            todoList.appendChild(li);
        });
    };

    const addTask = (text) => {
        todos.push({ text, completed: false });
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    };

    const deleteTask = (index) => {
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    };

    const updateTask = (index, newText) => {
        todos[index].text = newText;
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const toggleComplete = (index) => {
        todos[index].completed = !todos[index].completed;
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    };

    const enableEdit = (span, index) => {
        span.contentEditable = true;
        span.focus();
        span.onblur = () => {
            updateTask(index, span.textContent);
            span.contentEditable = false;
        };
    };

    todoForm.onsubmit = (e) => {
        e.preventDefault();
        const text = todoInput.value.trim();
        if (text) {
            addTask(text);
            todoInput.value = '';
        }
    };

    renderTodos();
});
