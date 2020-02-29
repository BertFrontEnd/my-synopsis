// 01. Получение длины строки через свойство "length"
console.log('01. Получение длины строки через свойство "length"');
let str1 = 'Hello, Word!';
console.log(str1);
let newStr1 = str1.length; // Доступ к длине строки происходит через "." с добавлением свойства "length"
console.log(newStr1); // Возвращается длина строки
console.log('');


// 02. Получение подстроки (символа), которая занимает определенную позицию через "[]"
console.log('02. Получение подстроки (символа), которая занимает определенную позицию через "[]"');
let str2 = 'Hello, Word!';
console.log(str2);
let newStr2 = str2[7]; // В "[]" указывается позиция "pos" подстроки (символа): str[pos]
console.log(newStr2); // Возвращается подстрока (символ). Если пусто/не найдено (указана позиция больше длины строки), то - undefined
console.log('');


// 03. Получение подстроки (символа), которая занимает определенную позицию с помощью метода "charAt"
console.log('03. Получение подстроки (символа), которая занимает определенную позицию с помощью метода "charAt"');
let str3 = 'Hello, Word!';
console.log(str3);
let newStr3 = str3.charAt(9); // Доступ к подстроке (символу) происходит через "." с добавлением свойства "charAt"
console.log(newStr3); // Возвращается подстрока (символ). Если пусто/не найдено (указана позиция больше длины строки), то - '' (пустая строка)
console.log('');


// 04. Получение подстроки с помощью метода "slice"
console.log('04. Получение подстроки с помощью метода "slice"');
let str4 = 'Hello, Word!';
console.log(str4);
let newStr4_0 = str4.slice(7, 11); // Первый аргумент start - начало для отсчета, второй аргумент (не включая) end - конец отсчета. Возвращает часть строки от start до (не включая) end
let newStr4_1 = str4.slice(-12, 5); // Start можно задавать отрицательным значением. Это означает, что начальная позиция start определяется с конца строки. End - от позиции start (отсчет идет от -1, исключая 0)
let newStr4_2 = str4.slice(-2, -1); // Start и end можно задавать отрицательными значениями. Это означает, что начальная и конечная позиции определяются с конца строки (отсчет идет от -1, исключая 0)
let newStr4_3 = str4.slice(9, 9); // При равных аргументах возвращается пустая строка
let newStr4_4 = str4.slice(7); // Если аргумент end отсутствует, метод возвращает символы до конца строки
console.log(newStr4_0);
console.log(newStr4_1);
console.log(newStr4_2);
console.log(newStr4_3);
console.log(newStr4_4);
console.log('');


// 05. Получение подстроки с помощью метода "substring"
console.log('05. Получение подстроки с помощью метода "substring"');
let str5 = "Hello, not a perfect World!";
console.log(str5);
let newStr5_0 = str5.substring(7, 9); // Первый аргумент start - начало для отсчета, второй аргумент (не включая) end - конец отсчета. Возвращает часть строки от start до (не включая) end
let newStr5_1 = str5.substring(26, 13); // Start можно задавать больше end. При этом метод ведет себя, как будто аргументы поменялись местами. Возвращает указанную часть строки
let newStr5_2 = str5.substring(-8, -4); // Отрицательные значения и NaN не поддерживаются. Это означает, что они интерпретируются как 0 и метод возвращает пустую строку
let newStr5_3 = str5.substring(9, 9); // При равных аргументах возвращается пустая строка
let newStr5_4 = str5.substring(21); // Если аргумент end отсутствует, метод возвращает символы до конца строк
let newStr5_5 = str5.substring(100, 21); // Пример 2 in 1 - сочетает в себе случай, когда start больше end: если какой-то из аргументов больше, чем длина строки - он считается равным длине строки. Метод возвращает указанную часть строки
console.log(newStr5_1);
console.log(newStr5_2);
console.log(newStr5_3);
console.log(newStr5_4);
console.log(newStr5_5);
console.log('');


// 06. Получение подстроки м "substr"
console.log('06. Получение подстроки с помощью метода "substr"');
let str6 = "Hello, not a perfect World!";
console.log(str6);
let newStr6_0 = str6.substr(7, 20); // Первый аргумент start - начало для отсчета, второй аргумент length - длина строки, позволяет указать длину вместо конечной позиции. Возвращает часть строки от start длины length.
let newStr6_1 = str6.substr(5, -5); // При отрицательном значении length возвращает пустую строку
let newStr6_2 = str6.substr(-14, 7); // Для start можно задавать отрицательные значения. Это означает, что начальная позиция определяется с конца строки (отсчет идет от -1, исключая 0)
let newStr6_3 = str6.substr(1); // Если аргумент length отсутствует или больше длины самой строки, метод возвращает символы до конца строки. Работает при отрицательном значении start
let newStr6_4 = str6.substr(100, 1); // Если значение start больше длины строки, то метод возвращает пустую строку
let newStr6_5 = str6.substr(-100, 1); // Если отрицательное значение start больше длины строки, за начальное значение берется 0
console.log(newStr6_0);
console.log(newStr6_1);
console.log(newStr6_2);
console.log(newStr6_3);
console.log(newStr6_4);
console.log(newStr6_5);
console.log('');


// 07. Изменение регистра строки. Перевод строки в верхний регистр с помощью метода "toUpperCase"
console.log('07. Изменение регистра строки. Перевод строки в верхний регистр с помощью метода "toLowerCase"');
let str7 = 'Hello, Word!';
console.log(str7);
let newStr7_0 = str7.toUpperCase(); // Возвращает всю строку в верхнем регистре
let newStr7_1 = str7[4].toUpperCase(); // Возвращает указанный символ в верхнем регистре
console.log(newStr7_0);
console.log(newStr7_1);
console.log('');


// 08. Изменение регистра строки. Перевод строки в нижний регистр с помощью метода "toLowerCase"
console.log('08. Изменение регистра строки. Перевод строки в нижний регистр с помощью метода "toLowerCase"');
let str8 = 'Hello, Word!';
console.log(str8);
let newStr8_0 = str8.toLowerCase(); // Возвращает всю строку в нижнем регистре
let newStr8_1 = str8[4].toLowerCase(); // Возвращает указанный символ в нижнем регистре
console.log(newStr8_0);
console.log(newStr8_1);
console.log('');


// 09. Поиск подстроки с помощью метода "indexOf" и "lastIndexOf"
console.log('09. Поиск подстроки с помощью метода "indexOf" и "lastIndexOf"');
let str9 = "Hello, not a perfect World!";
console.log(str9);
let newStr9_0 = str9.indexOf('e', 7); // Первый аргумент ищет подстроку subStr в строке str, начиная с позиции pos второго аргумента. Второй аргумент необязательный. Метод возвращает позицию, на которой располагается первое совпадение и завершает свою работу
let newStr9_1 = str9.indexOf('e'); // В случае использования метода без второго аргумента pos, поиск производится с самого начала строки str. Метод возвращает позицию, на которой располагается первое совпадение и завершает свою работу
let newStr9_2 = str9.indexOf('Hi'); // Если совпадений нет, метод возвращает -1
console.log(newStr9_0);
console.log(newStr9_1);
console.log(newStr9_2);

// Цикл while поиска всех вхождений в строку подстроки subStr
console.log('---'); // Алгоритм в длинной записи
let subStr1 = 'e'; // Цель поиска
let pos1 = 0; // Позиция начала поиска
while (true) {
    let newStr9_3 = str9.indexOf(subStr1, pos1); // Поиск указанной подстроки с указанной позиции
    if (newStr9_3 == -1) break; // Если подстрока не найдена, выйти из цикла
    console.log(newStr9_3); // Вывод найденной позиций
    pos1 = newStr9_3 + 1; // Добавление к текущей позиции 1 для следующего цикла поиска
}

console.log('---'); // Алгоритм в короткой записи
let subStr2 = 'o'; // Цель поиска
let pos2 = -1; // Позиция начала поиска
while ((pos2 = str9.indexOf(subStr2, pos2 + 1)) !=-1) {
    console.log(pos2); // Поиск указанной подстроки с указанной позиции и, при выполнении условия цикла, вывод найденной позиций
}

// Цикл for поиска всех вхождения в строку подстроки subStr
console.log('---');
let subStr3 = 'Hello'; // Цель поиска
if (str9.indexOf(subStr3)) {
    console.log(`Совпадение найдено`); // Поиск указанной подстроки с самого начала строки str, где и находится искомая подстрока subStr, т.е. с 0. Следовательно, метод возвращает 0 и цикл решает, что подстрока не найдена, и завершает свою работе, ничего не возвращая (т.к. результат условия false)
}

console.log('---');
let subStr4 = 'Hello'; // Цель поиска
if (str9.indexOf(subStr4) != -1) {
    console.log(`Совпадение найдено`); // Поиск указанной подстроки subStr с позиции -1 строки str. Подстрока находится, условие выполняется, цикл завершается, возвращая результат (т.к. результат условия true)
}

console.log('"lastIndexOf" работает аналогично "indexOf", но проходит по СТРОКЕ справа налево');
console.log('"lastIndexOf" используется тогда, когда нужно получить самое последнее вхождение: перед концом строки или начинающееся до (включительно) определённой позиции');

console.log('');


// 10. Поиск подстроки с помощью метода "includes"
console.log('10. Поиск подстроки с помощью метода "includes"');
let str10 = 'Hello, Word!';
console.log(str10);
let newStr10_0 = str10.includes('Word'); // Если подстрока найдена, возвращается true,
let newStr10_1 = str10.includes('War'); // Если подстрока не найдена, возвращается false
let newStr10_2 = str10.includes('Hello', 7); // Необязательный второй аргумент позволяет начать поиск с определённой позиции. Возвращает true или false в зависимости от результатов поиска
console.log(newStr10_0);
console.log(newStr10_1);
console.log(newStr10_2);
console.log('');


// 11. Поиск подстроки с помощью метода "startsWith" и "endsWith"
console.log('11. Поиск подстроки с помощью метода "startsWith" и "endsWith"');
let str11 = 'Hello, Word!';
console.log(str11);
let newStr11_0 = str11.startsWith('H'); // Метод проверяет начинается ли строка с указанной подстроки. Если совпадение есть, возвращается true
let newStr11_1 = str11.startsWith('!'); // Если совпадения нет, возвращается false
console.log(newStr11_0);
console.log(newStr11_1);
console.log('');


// 12. Поиск подстроки с помощью метода "endsWith"
console.log('12. Поиск подстроки с помощью метода "endsWith"');
let str12 = 'Hello, Word!';
console.log(str12);
let newStr12_0 = str12.endsWith("!"); // Метод проверяет начинается ли строка с указанной подстроки. Если совпадение есть, возвращается true
let newStr12_1 = str12.endsWith("H"); // Если совпадения нет, возвращается false
console.log(newStr12_0);
console.log(newStr12_1);
console.log('');


// 13. Сравнение строк с помощью метода "localeCompare"
console.log('13. Сравнение строк с помощью метода "localeCompare"');
let str13_1 = 'Hello, Word!';
let str13_2 = 'Привет, Мир!';
console.log(str13_1);
console.log(str13_2);
let newStr13 = str13_1.localeCompare(str13_2); // Метод возвращает число, которое показывает, какая строка больше в соответствии с правилами языка: -1, если str1 меньше str2; 1, если str1 больше str2; 0, если строки равны.
console.log(newStr13);
console.log('');


// 14. Удаление пробелов в начале и/или конце строки с помощью метода "trim"
console.log('14. Удаление пробелов в начале и/или конце строки с помощью метода "trim"');
let str14 = '       Hello, Word!     ';
console.log(str14);
let newStr14 = str14.trim(str14); // Возвращает новую строку без пробелов в начале и конце строки
console.log(newStr14); // Исходная СТРОКА не мутирует
console.log('');


// 15. Повторение строки n-раз с помощью метода "repeat"
console.log('15. Повторение строки n-раз с помощью метода "repeat"');
let str15 = "Hello, it's me...";
console.log(str15);
let newStr15 = str15.repeat(5); // Возвращает строку n = 5 раз.
console.log(newStr15); // Исходная СТРОКА не мутирует
console.log('');
