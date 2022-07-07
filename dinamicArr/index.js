'use strict'
let arr = []

const getValueInput = () => {
    let value = document.getElementById('todo_item').value
    if (value !== '') {
        arr.push(value)
        document.getElementById('todo_item').value = ''
        document.getElementById('todo_item').focus()
        viewTodo()
    } else {
        alert('Please enter a value')
    }
}

const viewTodo = () => {
    let todo = document.getElementById('todo_list')
    todo.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li')
        li.innerHTML = arr[i]
        todo.appendChild(li)
    }
}


