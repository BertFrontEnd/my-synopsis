// 01. Деструктуризация массива:
console.log('01. Деструктуризация массива:');
console.log('');

console.log(`const myArr = ['a', 'b', 'c', 'd'];
const [firstElement, secondElement, thirdElement, fourthElement] = myArr;`);
console.log(`console.log(firstElement, secondElement, fourthElement);`);
console.log('');

const myArr = ['a', 'b', 'c', 'd'];
const [firstElement, secondElement, thirdElement, fourthElement] = myArr;
console.log(`Результат деструктуризации массива:`);
console.log(firstElement, secondElement, fourthElement); // Выведет: 'a b d'. Во второй строке происходит присваивание переменной соответствующему индексу элемента в массиве. Обычно назначение переменных происходит с правой стороны, но деструктурирование происходит слева. Это можно представить, как доставать яйца из ящика и помещать их в отдельные чаши для правильной идентификации.
console.log('');
//
//
//
// 02. Пропуск элементов:
console.log('02. Пропуск элементов:');
console.log('');

console.log(`const names = ['Kev', 'James', 'Rose', 'Costa'];
const const [person1, ,person3, person4] = names;`);
console.log(`console.log(person2);`);
console.log('');

const names = ['Kev', 'James', 'Rose', 'Costa'];
const [person1, , person3, person4] = names;
console.log(`Результат пропуска элемента массива:`);
console.log(person4); // Выведет соответствующее значение переменной, а затем 'undefined'. Если выбрать несуществующий элемент, то выдаст ошибку. Для пропуска элемента при деструктурировании, необходимо оставить пробел между двумя запятыми, где индекс элемента находится в исходном массиве.
console.log('');
//
//
//
// 03. Назначение значения элемента массива по умолчанию:
console.log('03. Назначение значения элемента массива по умолчанию:');
console.log('');

console.log(`const clothColors = ['red', 'blue', 'green'];
const [sweatShirt, tShirt, hoodie, short, trackPants = 'black'] = clothColors;`);
console.log(`console.log(trackPants);`);
console.log('');

const clothColors = ['red', 'blue', 'green'];
const [sweatShirt, tShirt, hoodie, trackPants = 'black'] = clothColors;
console.log(`Результат назначения значения элемента массива по умолчанию:`);
console.log(trackPants); // Выведет: 'black'
console.log('');
//
//
//
// 04. Сохранение оставшихся элементов в другом массиве:
console.log('04. Сохранение оставшихся элементов в другом массиве:');
console.log('');

console.log(`const languages = ["french", "spanish", "italian", "swahili"];
const countries = [france, ...remainingLanguages] = languages;`);
console.log(`console.log(remainingLanguages);`);
console.log('');

const languages = ['french', 'spanish', 'italian', 'swahili'];
const countries = ([swahili, ...remainingLanguages] = languages);
console.log(`Результат сохранения оставшихся элементов в другом массиве:`);
console.log(remainingLanguages); // Выведет: '["spanish", "italian", "swahili"]', используя оператор rest ...
console.log('');
//
//
//
// 05. Деструктуризация объекта:
console.log('05. Деструктуризация объекта:');
console.log('');

console.log(`const dogOne = {
  name: 'Max',
  color: 'brown',
  legs: 4
};
const {name, color} = dogOne;`);
console.log(`console.log(color);`);
console.log('');

const dogOne = {
  name: 'Max',
  color: 'brown',
  legs: 4,
};
const { name, color } = dogOne;
console.log(`Результат деструктуризации объекта:`);
console.log(color); // Выведет: 'brown'. Переменная, установленная для деструктурированного свойства, должна быть такая же, как имя свойства на исходном объекте, так что если использовать отличное имя переменной, то результат будет 'undefined'.
console.log('');
//
//
//
// 06. Назначение параметра и его значения объекта по умолчанию:
console.log('06. Назначение параметра и его значения объекта по умолчанию:');
console.log('');

console.log(`const dogTwo = {
  name: 'Max',
  color: 'brown',
  legs: 4
}
const {owner = 'Steve'} = dogTwo;`);
console.log(`console.log(owner);`);
console.log('');

const dogTwo = {
  name: 'Max',
  color: 'brown',
  legs: 4,
};
const { owner = 'Steve' } = dogTwo;
console.log(
  `Результат назначения параметра и его значения объекта по умолчанию:`
);
console.log(owner); // Выведет: 'Steve'
console.log('');
//
//
//
// 07. Замена имени параметра объекта:
console.log('07. Замена имени параметра объекта:');
console.log('');

console.log(`const dogThree = {
  name: 'Max',
  color: 'brown',
  legs: 4
}
const {owner = 'Steve', legs : paws} = dogThree;`);
console.log(`console.log(paws);`);
console.log(`console.log(legs);`);
console.log('');

const dogThree = {
  name: 'Max',
  color: 'brown',
  legs: 4,
};
const { owner = 'Steve', legs: paws } = dogThree;
console.log(
  `Результат назначения параметра и его значения объекта по умолчанию:`
);
console.log(paws); // Выведет: '4'. Для изменения имени параметра объекта необходимо добавить двоеточие и имя переменной (псевдонима).
console.log(legs); // Выведет: 'reference error, undefined'. При изменении имени параметра объекта, она перестает сущестовать.
console.log('');
//
//
//
