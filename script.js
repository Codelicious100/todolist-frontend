document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var input = document.getElementById('todo-input');
    var newTodo = input.value;
    input.value = '';

    var li = document.createElement('li');
    li.textContent = newTodo;

    document.getElementById('todo-list').appendChild(li);
});
