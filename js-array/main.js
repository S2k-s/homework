// Задание 1.
// Дан массив пользователей:
const users = [
	{ name: 'Alex', age: 24, isAdmin: false },
	{ name: 'Bob', age: 13, isAdmin: false },
	{ name: 'John', age: 31, isAdmin: true },
	{ name: 'Jane', age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
users.push({ name: 'Ann', age: 19, isAdmin: false }, { name: 'Jack', age: 43, isAdmin: true });

// console.log(users)

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
	let sum = 0;

	for (let i = 0; i < users.length; i++) {
		sum += users.at(i).age;
	}
	return sum / users.length;
}

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
	for (let i = 0; i < users.length; i++) {
		if (users.at(i).isAdmin === true) {
			console.log(users.at(i));
		}
	}
}
getAllAdmins(users);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

// Функция, которая возвращает первые n элементов
function first(array, n) {
	if (n === 0) {
		return [];
	}

	if (n === undefined) {
		return [array[0]];
	}

	if (n > array.length) {
		return `Число ${n} не может быть больше длины массива ${array.length}`;
	}

	let result = [];

	for (let i = 0; i < n; i++) {
		result.push(array[i]);
	}
	return result;
}

console.log(first(users, 7));
