// I - ДОБАВЛЕНИЕ/УДАЛЕНИЕ ЭЛЕМЕНТОВ:
console.log('');
console.log('I - ДОБАВЛЕНИЕ/УДАЛЕНИЕ ЭЛЕМЕНТОВ:');
console.log('');
//
//
//
// 01. Удаление последнего элемента МАССИВА "pop"
console.log('01. Удаление последнего элемента МАССИВА "pop"');
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
let newArr1 = arr1.pop(); // Без указания аргумента
console.log(newArr1); // Возвращает удаленный элемент МАССИВА
console.log(arr1); // Исходный МАССИВ мутирует
console.log('');

// 02. Добавление последнего элемента МАССИВА "push"
console.log('02. Добавление последнего элемента МАССИВА "push"');
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2);
let newArr2 = arr2.push(6); // Указывается добавляемый элемент
console.log(newArr2); // Возвращает добавленный элемент МАССИВА
console.log(arr2); // Исходный МАССИВ мутирует
console.log('');

// 03. Удаление первого элемента МАССИВА "shift"
console.log('03. Удаление первого элемента МАССИВА "shift"');
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3);
let newArr3 = arr3.shift(); // Без указания аргумента
console.log(newArr3); // Возвращает удаленный элемент МАССИВА
console.log(arr3); // Исходный МАССИВ мутирует
console.log('');

// 04. Добавление первого элемента МАССИВА "unshift"
console.log('04. Добавление первого элемента МАССИВА "unshift"');
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4);
let newArr4 = arr4.unshift(0); // Указывается добавляемый элемент
console.log(newArr4); // Возвращает длину МАССИВА
console.log(arr4); // Исходный МАССИВ мутирует
console.log('');

// 05. Удаление указанного элемента МАССИВА по индексу "delete"
console.log('05. Удаление указанного элемента МАССИВА по индексу "delete"');
let arr5 = ['Миша', 'Даша', 'Дима', 'Саша', 'Катя'];
console.log(arr5);
let newArr5 = delete arr5[1]; // Указывается индекс удаляемого элемента
console.log(newArr5); // Возвращает булево значение true
console.log(arr5); // Исходный МАССИВ мутирует. На месте удаленного элемента образовывается пустое место, без сдвига элементов массива - длина остается прежней
console.log('');

// 06. Удаление указанного диапазона элементов МАССИВА "splice"
console.log('06. Удаление указанного диапазона элементов МАССИВА "splice"');
let arr6 = ['Миша', 'Даша', 'Дима', 'Саша', 'Катя'];
console.log(arr6);
let newArr6 = arr6.splice(1, 3, 'NewName'); // Первый аргумент - индекс начального элемента для удаления (может быть отрицательным, тогда отсчет элементов идет с конца массива), второй - количество удаляемых элементов. Третьим аргументом можно указать то, что нужно добавить на место удаляемых элементов МАССИВА.
console.log(newArr6); // Возвращает МАССИВ из удаленных элементов исходного МАССИВА
console.log(arr6); // Исходный МАССИВ мутирует
console.log('');

// 07. Удаление указанного диапазона элементов МАССИВА "slice"
console.log('07. Удаление указанного диапазона элементов МАССИВА "slice"');
let arr7 = ['Миша', 'Даша', 'Дима', 'Саша', 'Катя'];
console.log(arr7);
let newArr7 = arr7.slice(1, 3); // Первый аргумент - индекс начального элемента для удаления (может быть отрицательным, тогда отсчет элементов идет с конца массива), второй - индекс конечного элемента для удаления (не включая его самого). Без аргументов - возвращение всего массива (копирование)
console.log(newArr7); // Возвращает новый МАССИВ, в который копирует элементы в диапазоне указанном в аргументе (не включая последний)
console.log(arr7); // Исходный МАССИВ не мутирует
console.log('');

// 08. Сложение "concat"
console.log('08. Сложение "concat"');
let arr9 = [1, 2, 3, 4, 5];
console.log(arr9);
let newArr9 = arr9.concat(
  6,
  7,
  8,
  9,
  'Миша',
  'Даша',
  'Дима',
  'Саша',
  'Катя',
  [10, 11, 12, 13],
  { name: 'Sergey' }
); // В качестве аргумента можно указать числа, строки, массивы, объекты
console.log(newArr9); // Возвращает новый МАССИВ. Числа, строки, объекты добавляются (копируются) как новые элементы массива. При использовании массива как аргумента для добавления (копирования) берутся его элементы
console.log(arr9); // Исходный МАССИВ не мутирует
console.log('');
//
//
//
// II - ПРЕОБРАЗОВАНИЕ МАССИВА / ПЕРЕБОР ЭЛЕМЕНТОВ:
console.log('');
console.log('II - ПРЕОБРАЗОВАНИЕ МАССИВА / ПЕРЕБОР ЭЛЕМЕНТОВ:');
console.log('');
//
//
//
// 01. Разделение СТРОКИ в МАССИВ по разделителю "split"
console.log('01. Разделение СТРОКИ в МАССИВ по разделителю "split"');
let str1 = 'Миша, Даша, Дима, Саша, Катя';
console.log(str1);
let newStr1 = str1.split(', '); // Указывается разделитель: если разделитель '' (пустая строка) - строка разбивается на массив с количеством элементов равным количеству подстрок в строке; если разделитель содержит элемент строки - разделение происходит по этому элементу. Если указан второй аргумент, происходит ограничение на количеству элементов в массиве, лишнее отбрасывается
console.log(newStr1); // Возвращает МАССИВ из элементов в зависимости от разделителя
console.log(str1); // Исходная СТРОКА не мутирует
console.log('');

// 02. Склеивание МАССИВА в СТРОКУ по разделителю "join"
console.log('02. Склеивание МАССИВА в СТРОКУ по разделителю "join"');
let str2 = ['Миша', 'Даша', 'Дима', 'Саша', 'Катя'];
console.log(str2);
let newStr2 = str2.join(' / '); // Указывается символ разделителя
console.log(newStr2); // Возвращает МАССИВ
console.log(str2); // Исходный МАССИВ не мутирует
console.log('');

// 03. Реверс МАССИВА "reverse"
console.log('04. Реверс МАССИВА "reverse"');
let arr8 = [1, 2, 3, 4, 5];
console.log(arr8);
let newArr8 = arr8.reverse(); // Без указания аргумента
console.log(newArr8); // Возвращает новый МАССИВ
console.log(arr8); // Исходный МАССИВ мутирует
console.log('');

// 04. Преобразование МАССИВА "map"
console.log('04. Преобразование МАССИВА "map"');
let arr10 = ['Екатерина', 'Даша', 'Сергей', 'Ксения', 'Катя'];
console.log(arr10);

/* let newArr10 = arr10.map(function(item, index, array) {
    return (item += " - это имя" + " из " + item.length + ' букв и это элемент массива под номером ' + index + ' из массива: ' + '[' + array + ']');
}); // Запись функции на ES5. В качестве аргумента можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ */

let newArr10 = arr10.map(
  (item, index, array) =>
    (item += ` - это имя из ${item.length} букв и это элемент массива под номером ${index} из массива: [${array}]`)
); // Запись функции на ES6. В качестве аргумента можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ

console.log(newArr10); // Возвращает новый МАССИВ
console.log(arr10); // Исходный МАССИВ не мутирует
console.log('');

// 05. Сортировка МАССИВА "sort"
console.log('05. Сортировка МАССИВА "sort"');
let arr11 = [5, 3, 1, 2, 4];
console.log(arr11);

/* let newArr11 = arr11.sort(function(a, b) {
    console.log(a + " <> " + b);
    return a - b
}); // Запись функции на ES5. В качестве аргумента нужно передавать функцию сравнения двух элементов массива, иначе элементы будут сравниваться как строки. Алгоритм работы функции: return - ПОЛОЖИТЕЛЬНОЕ число - элементы менять местами НАДО; return - ОТРИЦАТЕЛЬНОЕ число - элементы менять местами НЕ НАДО */

let newArr11 = arr11.sort((a, b) => a - b); // Запись функции на ES5. В качестве аргумента нужно передавать функцию сравнения двух элементов массива, иначе элементы будут сравниваться как строки. Алгоритм работы функции: если результат выполнения функции ПОЛОЖИТЕЛЬНОЕ число - элементы менять местами НАДО; если результат выполнения функции ОТРИЦАТЕЛЬНОЕ число - элементы менять местами НЕ НАДО

console.log(newArr11); // Возвращает новый МАССИВ
console.log(arr11); // Исходный МАССИВ мутирует
console.log('');

// 06. Вычисление одного значения на основе всего МАССИВА "reduce" и "reduceRight"
console.log(
  '06. Вычисление одного значения на основе всего МАССИВА "reduce" и "reduceRight"'
);
let arr12 = [1, 2, 3, 4, 5];
console.log(arr12);

/* let newArr12 = arr12.reduce(function(previousValue, item, index, array) {
    console.log('previousValue:' + previousValue + ', ' + 'item: ' + item + ', ' + 'index: ' + index + ', ' + 'array: ' + array + ', ' + 'initial: ' + initial);
    return previousValue + item;
}, initial = 0); // Запись функции на ES5. Вычисляет одно значение на основе всего МАССИВА, вызывая func для каждого элемента и передавая промежуточный результат между вызовами. В качестве аргументов используются ФУНКЦИЯ и НАЧАЛЬНОЕ ЗНАЧЕНИЕ. В качестве аргументов ФУНКЦИИ можно указать: previousValue - предыдущее, а в начале - начальное (initial) значение, item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ */

let newArr12 = arr12.reduce((previousValue, item, index, array) => {
  console.log(
    `previousValue: ${previousValue}, item: ${item}, index: ${index}, array: ${array}, initial: ${initial}`
  );
  return previousValue + item;
}, (initial = 0)); // Запись функции на ES6. Вычисляет одно значение на основе всего МАССИВА, вызывая func для каждого элемента и передавая промежуточный результат между вызовами. В качестве аргументов используются ФУНКЦИЯ и НАЧАЛЬНОЕ ЗНАЧЕНИЕ. В качестве аргументов ФУНКЦИИ можно указать: previousValue - предыдущее, а в начале - начальное (initial) значение, item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ

console.log(newArr12); // Возвращает одно значение на основе всего МАССИВА
console.log(arr12); // Исходный МАССИВ не мутирует
console.log(
  '"reduceRight" работает аналогично "reduce", но проходит по МАССИВУ справа налево'
);
console.log('');

// 07. Перебор элементов МАССИВА "forEach"
console.log('07. Перебор элементов МАССИВА "forEach"');
let arr13 = ['Екатерина', 'Даша', 'Сергей', 'Ксения', 'Катя'];
console.log(arr13);

/* let newArr13 = arr13.forEach(function(item, index, array) {
    console.log(item + ' - это элемент массива [' + array + '] под номером ' + '"' + index + '"');
}); // Запись функции на ES5. В качестве аргументов используется ФУНКЦИЯ. В качестве аргументов ФУНКЦИИ можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ */

let newArr13 = arr13.forEach((item, index, array) =>
  console.log(`${item} - это элемент массива [${array}] под номером "${index}"`)
); // Запись функции на ES6. В качестве аргументов используется ФУНКЦИЯ. В качестве аргументов ФУНКЦИИ можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВВ

console.log(newArr13); // undefined // Возвращает результат ФУНКЦИИ, который отбрасывается и игнорируется
console.log(arr13); // Исходный МАССИВ не мутирует
console.log('');
//
//
//
// III - ПОИСК СРЕДИ ЭЛЕМЕНТОВ:
console.log('');
console.log('III - ПОИСК СРЕДИ ЭЛЕМЕНТОВ:');
console.log('');
//
//
//
// 01. Поиск элемента МАССИВА "indexOf" и "lastIndexOf"
console.log('01. Поиск элемента МАССИВА "indexOf" и "lastIndexOf"');
let arr14 = ['Екатерина', 'Даша', 'Сергей', 'Ксения', 'Катя'];
console.log(arr14);
let newArr14 = arr14.indexOf((item = 'Катя'), (pos = 0)); // В качестве аргументов используются item - элемент, который нужно найти и pos - начальная позиция для поиска. Чаще используется без второго аргумента
console.log(newArr14); // Ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено
console.log(arr14); // Исходный МАССИВ не мутирует
console.log(
  '"lastIndexOf" работает аналогично "indexOf", но проходит по МАССИВУ справа налево'
);
console.log('');

// 02. Поиск элемента МАССИВА "includes"
console.log('02. Поиск элемента МАССИВА "includes"');
let arr15 = ['Екатерина', 'Даша', 'Сергей', 'Ксения', 'Катя'];
console.log(arr15);
let newArr15 = arr15.indexOf((item = 'Сергей'), (pos = 0)); // В качестве аргументов используются item - элемент, который нужно найти и pos - начальная позиция для поиска. Чаще используется без второго аргумента
console.log(newArr15); // Возвращает true, если в МАССИВЕ имеется элемент item, в противном случае false
console.log(arr15); // Исходный МАССИВ не мутирует
console.log('');

// 03. Поиск ЭЛЕМЕНТА / ИНДЕКСА ЭЛЕМЕНТА МАССИВА по условию "find" и "findIndex"
console.log('03. Поиск ЭЛЕМЕНТОВ МАССИВА по условию "find" и "findIndex"');
let arr16 = [
  { id: 1, name: 'Екатерина' },
  { id: 2, name: 'Даша' },
  { id: 3, name: 'Сергей' },
  { id: 4, name: 'Ксения' },
  { id: 5, name: 'Елизавета' },
];
console.log(arr16);

/* let newArr16 = arr16.find(function(item, index, array) {
    console.log(item + ' - это элемент массива [' + array + '] под номером ' + '"' + index + '"');
    return item.id == 3;
}); // Запись функции на ES5. В качестве аргументов используется ФУНКЦИЯ. В качестве аргументов ФУНКЦИИ можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ */

let newArr16 = arr16.find((item, index, array) => {
  console.log(
    `${item} - это элемент массива [${array}] под номером "${index}"`
  );
  return item.id === 3;
}); // Запись функции на ES6. В качестве аргументов используется ФУНКЦИЯ. В качестве аргументов ФУНКЦИИ можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ

console.log(newArr16); // Фильтрует элементы через функцию и отдаёт ПЕРВЫЙ ЭЛЕМЕНТ, если при его прохождении через эту функцию возвращается true, сама функция прерывается
console.log(arr16); // Исходный МАССИВ не мутирует
console.log(
  '"findIndex" работает аналогично "find", но возвращает вместо самого ЭЛЕМЕНТА его ИНДЕКС'
);
console.log('');

// 04. Поиск/фильтрация ЭЛЕМЕНТОВ МАССИВА по условию "filter"
console.log('04. Поиск элементов МАССИВА по условию "filter"');
let arr17 = [
  { id: 1, name: 'Екатерина' },
  { id: 2, name: 'Даша' },
  { id: 3, name: 'Сергей' },
  { id: 4, name: 'Ксения' },
  { id: 5, name: 'Елизавета' },
];
console.log(arr17);

/* let newArr17 = arr17.filter(function(item, index, array) {
    console.log(item + ' - это элемент массива [' + array + '] под номером ' + '"' + index + '"');
    return item.id <= 3;
}); // Запись функции на ES5. В качестве аргументов используется ФУНКЦИЯ. В качестве аргументов ФУНКЦИИ можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ */

let newArr17 = arr17.filter((item, index, array) => {
  console.log(
    `${item} - это элемент массива [${array}] под номером "${index}"`
  );
  return item.id <= 3;
}); // Запись функции на ES6. В качестве аргументов используется ФУНКЦИЯ. В качестве аргументов ФУНКЦИИ можно указать: item - элемент исходного МАССИВА, index - индекс элемента исходного МАССИВА и array - сам исходный МАССИВ

console.log(newArr17); // Фильтрует элементы через функцию и отдаёт ВСЕ ЗНАЧЕНИЯ, если при их прохождении через эту функцию возвращается true. Перебор соблюдается до окончания соблюдения условия. Если ничего не найдено, то возвращается пустой МАССИВ
console.log(arr17); // Исходный МАССИВ не мутирует
console.log('');
//
//
//
// IV - ДОПОЛНИТЕЛЬНО:
console.log('');
console.log('IV - ДОПОЛНИТЕЛЬНО:');
console.log('');
//
//
//
// 01. Проверка является ли МАССИВ МАССИВОМ "Array.isArray"
console.log('01. Проверка является ли МАССИВ МАССИВОМ "Array.isArray"');
let arr18 = ['Екатерина', 'Даша', 'Сергей', 'Ксения', 'Катя'];
console.log(arr18);
let newArr18 = Array.isArray(arr18); // В качестве аргумента используется сам проверяемый МАССИВ
console.log(newArr18); // Возвращает true или false
console.log(arr18); // Исходный МАССИВ не мутирует
console.log('');
