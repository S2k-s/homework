// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const PERSON = {
	name: 'Eshibek',
	age: 16,
	live: 'in Kyrgzstan',
	hobby: {
		1: 'read manga',
		2: 'learn English',
		3: 'walking',
	},
	study: 'in school',
};
console.log(PERSON);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым.
// Если объект пуст - верните true, в противном случае false.

const OBJECT = {};

const IS_EMPTY = (object) => {
	for (let key in object) {
		return false; // если нашёл хоть одно свойство
	}
	return true;
};
console.log(IS_EMPTY(OBJECT));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread
// создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const TASK = {
	title: 'One piece',
	description:
		'One Piece is a Japanese manga and anime series about Monkey D. Luffy and his crew of pirates searching for the legendary treasure called "One Piece."',
	isCompleted: false,
};

const CLONE_AND_MODIFY = (object, modifications) => {
	return { ...object, ...modifications };
};

let newTask = CLONE_AND_MODIFY(TASK, { isCompleted: true });

for (let key in newTask) {
	console.log(`${key}:`, newTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
// method2() {
//     console.log('Метод 2 вызван');
// },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const CALL_ALL_METHODS = (object) => {
	for (let key in object) {
		if (typeof object[key] === 'function') {
			object[key]();
		}
	}
};

const MY_OBJECT = {
	property: 'Это не метод',
	method1() {
		console.log('Метод 1 вызван');
	},
	property: 'Это не метод',
	method2() {
		console.log('Метод 2 вызван');
	},
	property: 'Это не метод',
};

CALL_ALL_METHODS(MY_OBJECT);
