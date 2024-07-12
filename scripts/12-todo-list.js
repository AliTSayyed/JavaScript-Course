const todoList = [{
  name: 'make dinner',
  dueDate:'2024-7-11'}, {name: 'wash dishes', dueDate: '2024-7-22'}];

renderTodoList(); // render page every time it is loaded

function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
     <button class="delete-todo-button js-delete-todo-button">Delete</button>`;
    todoListHTML += html;
  });
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) =>{
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    })
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value // grabs value inside the input field and stores it 

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name: name, dueDate: dueDate});

  inputElement.value = ''; // makes the value in the text box empty again. 
  renderTodoList(); // update page after adding a todo.
}