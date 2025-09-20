import { todoKeys } from './constants.js';
import { setTodosToLocalStorage } from './storage.js';
import { createTodo, editTodoById, completeTodoById, deleteTodoById } from './service.js';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todos1 = document.querySelector('.todos');

const createTodoElement = (todo) => {
	const li = document.createElement('li');
	li.classList.add('todo');

	li.dataset.id = todo[todoKeys.id];

	li.innerHTML = `
    <div class="todo-text">${todo[todoKeys.id]}.  ${todo[todoKeys.text]}</div>
    <div class="todo-actions">
		<button class="button-complete button">&#10004;</button>
		<button class="button-edit button">&#10000;</button>
		<button class="button-delete button">&#10006;</button>
	</div>`;

	return li;
};

export const renderTodos = (todos) => {
	todos1.innerHTML = '';
	todos.forEach((todo) => {
		const todoElement = createTodoElement(todo);
		if (todo[todoKeys.is_completed]) {
			todoElement.classList.add('completed');
		}
		todos1.prepend(todoElement);
	});
};

const handleCreateTodo = (todos, text) => {
	const todo = createTodo(todos, text);
	const todoElement = createTodoElement(todo);
	setTodosToLocalStorage(todos);
	todos1.prepend(todoElement);
};

export const initTodoHandlers = (todos) => {
	form.addEventListener('submit', (event) => {
		event.preventDefault();

		const text = input.value.trim();
		if (!text) return;

		handleCreateTodo(todos, text);
		input.value = '';
	});

	todos1.addEventListener('click', (event) => {
		const todo = event.target.closest('.todo');
		if (!todo) return;

		const todoID = Number(todo.dataset.id);

		if (event.target.matches('.button-complete')) {
			completeTodoById(todos, todoID);
			setTodosToLocalStorage(todos);
			todo.classList.toggle('completed');
		}

		if (event.target.matches('.button-edit')) {
			const newText = prompt('Введите новый текст:');
			if (newText && newText.trim()) {
				editTodoById(todos, todoID, newText.trim());
				setTodosToLocalStorage(todos);
				todo.querySelector('.todo-text').textContent = `${todoID}. ${newText}`;
			}
		}

		if (event.target.matches('.button-delete')) {
			deleteTodoById(todos, todoID);
			setTodosToLocalStorage(todos);
			todo.remove();
		}
	});
};
