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
// 04. Деструктуризация объекта:
console.log('04. Деструктуризация объекта:');
console.log('');

console.log(`const dog = {
  name: 'Max',
  color: 'brown',
  legs: 4
};
const {name, color} = dog;`);
console.log(`console.log(color);`);
console.log('');

const dog = {
  name: 'Max',
  color: 'brown',
  legs: 4,
};
const { name, color } = dog;
console.log(`Результат деструктуризации объекта:`);
console.log(color); // Выведет: 'brown'. Переменная, установленная для деструктурированного свойства, должна быть такая же, как имя свойства на исходном объекте, так что если использовать отличное имя переменной, то результат будет 'undefined'.
console.log('');
