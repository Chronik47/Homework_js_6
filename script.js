/* 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
[]()*/

const element = document.getElementById("super_link");
console.log(element);

/* 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
[]()*/

const changeText = document.querySelectorAll(".card-link");
changeText.forEach((changeText) => {
  changeText.textContent = "ссылка";
});

/* 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
[]()
*/

const findChildren = document.querySelectorAll(".card-body .card-link");
console.log(findChildren);

/* 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
[]()*/

const elementWithValue = document.querySelector('[data-number="50"]');
console.log(elementWithValue);

/* 5. Выведите содержимое тега title в консоль.
[]()*/

console.log(document.title);

/* 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
[]()*/

const parentElement = document.querySelector(".card-title").parentNode; //Возвращает родителя определённого элемента DOM дерева.(Свойство parentNode содержит родительский элемент. Существует также почти идентичное свойство parentElement . Отличия: для тега html свойство parentNode возвращает document , а parentElement возвращает null .)
console.log(parentElement);

/* 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".*/

const pTag = document.createElement("p");
pTag.textContent = "Привет";
document.querySelector(".card").prepend(pTag); // prepend (Добавление элемента в начало)

/* 8. Удалите тег h6 на странице.*/

// const tag = document.querySelector("h6");
// tag.remove();

document.querySelector("h6").remove(); //Тоже самое что и выше, только читаемый лучше.
