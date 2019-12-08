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
console.log(firstElement, secondElement, fourthElement); // Выведет: a b d. Во второй строке происходит присваивание переменной соответствующему индексу элемента в массиве. Обычно назначение переменных происходит с правой стороны, но деструктурирование происходит слева. Это можно представить, как доставать яйца из ящика и помещать их в отдельные чаши для правильной идентификации.
console.log('');
//
//
//
// 02. Пропуск элементов:
console.log('02. Пропуск элементов:');
