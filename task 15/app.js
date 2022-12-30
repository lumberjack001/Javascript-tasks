let taskInput = document.getElementById('task-input');
let submit = document.getElementById('submit');
let tasks =  document.getElementById('tasks');
const form = document.getElementById('form')

submit.addEventListener('click', function(event){
    event.preventDefault()
    let list = document.createElement('li')
    if(taskInput.value === ''){
        alert('please add a task')
    }else {
        list.innerText = taskInput.value;
        tasks.appendChild(list)
    }
    form.reset()
})