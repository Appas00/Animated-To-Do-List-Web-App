let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
//local storage,cookies
let todos = [];
window.onload = ()=>{
    todos = JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})

function addtodo(todo) {
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para);

    para.addEventListener('click', () => {
        para.classList.toggle('completed');
    });

    para.addEventListener('dblclick', () => {
        para.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
            todoList.removeChild(para);
            remove(todo);
        }, 500);
    });
}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}
