import './styles.css';

import{ Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JavaScript!!!');
// todoList.nuevoTodo(tarea);

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log(todoList);
 
// crearTodoHtml(tarea);


// localStorage.setItem('mi-key', 'ABC123');

// sessionStorage.setItem('mi-key', 'ABC123');

// setTimeout(() => {
//     localStorage.removeItem('mi-key')
// }, 1500);