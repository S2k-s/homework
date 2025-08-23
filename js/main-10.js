// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)

const FIRST_NAME = 'Nikolay';
const SECOND_NAME = 'Aleksandrov';
const IS_STUDENT = true;

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.

let age = 20;
let currentYear = 2025;
const BIRTH_YEAR = currentYear - age;

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].

console.log(`Меня зовут ${FIRST_NAME} ${SECOND_NAME}, мне ${age} лет. Я ученик курса: ${IS_STUDENT}`)

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;

// 123456789falsetrue
