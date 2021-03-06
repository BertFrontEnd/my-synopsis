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
console.log(remainingLanguages); // Выведет: '["spanish", "italian", "swahili"]', используя оператор rest '...'. Эту технику следует использовать непосредственно перед закрывающей скобкой.
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
console.log(color); // Выведет: 'brown'. Переменная, установленная для деструктурированного свойства, должна быть такая же, как имя свойства на исходном объекте, иначе, если использовать отличное имя переменной, результат будет 'undefined'.
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
const {ownerTwo = 'Steve'} = dogTwo;`);
console.log(`console.log(owner);`);
console.log('');

const dogTwo = {
  name: 'Max',
  color: 'brown',
  legs: 4,
};
const { ownerTwo = 'Steve' } = dogTwo;
console.log(
  `Результат назначения параметра и его значения объекта по умолчанию:`
);
console.log(ownerTwo); // Выведет: 'Steve'
console.log('');
//
//
//
// 07. Замена имени параметра объекта псевдонимом:
console.log('07. Замена имени параметра объекта псевдонимом:');
console.log('');

console.log(`const dogThree = {
  name: 'Max',
  color: 'brown',
  legsThree: 4
}
const {ownerThree = 'Steve', legsThree: pawsThree} = dogThree;`);
console.log(`console.log(pawsThree);`);
console.log(`console.log(legsThree);`);
console.log('');

const dogThree = {
  name: 'Max',
  color: 'brown',
  legsThree: 4,
};
const { ownerThree = 'Steve', legsThree: pawsThree } = dogThree;
console.log(`Результат замены имени параметра объекта псевдонимом:`);
console.log(pawsThree); // Выведет: '4'. Для изменения имени параметра объекта необходимо добавить двоеточие и имя переменной (псевдонима).
// console.log(legsThree); // Выведет: 'reference error, undefined'. При изменении имени параметра объекта, он перестает существовать.
console.log('');
//
//
//
// 08. Присваивание значения псевдониму по умолчанию:
console.log('08. Присваивание значения псевдониму по умолчанию:');
console.log('');

console.log(`const dogFour = {
  name: 'Max',
  color: 'brown',
  legsFour: undefined
}
const {ownerFour = 'Steve', legsFour: pawsFour = 4} = dogFour;`);
console.log(`console.log(pawsFour);`);
console.log('');

const dogFour = {
  name: 'Max',
  color: 'brown',
  legsFour: undefined,
};
const { ownerFour = 'Steve', legsFour: pawsFour = 4 } = dogFour;
console.log(`Результат присваивания значения псевдониму по умолчанию:`);
console.log(pawsFour); // Выведет: '4'. Можно присвоить псевдониму значение по умолчанию на тот случай, если исходная переменная не существует или не определена. Присваивать значение необходимо после установки имени псевдонима.
console.log('');
//
//
//
// 09. Сохранение оставшихся элементов в другом объекте:
console.log('08. Сохранение оставшихся элементов в другом объекте:');
console.log('');

console.log(`const dogFive = {
  name: 'Max',
  colorFive: 'brown',
  legsFive: 4
}
const {colorFive, ...rest} = dogFive;`);
console.log(`console.log(rest);`);
console.log('');

const dogFive = {
  name: 'Max',
  colorFive: 'brown',
  legsFive: 4,
};
const { colorFive, ...rest } = dogFive;
console.log(`Результат сохранения оставшихся элементов в другом объекте:`);
console.log(rest); // Выведет: '{name: "Max", legs: 4}', используя оператор rest '...'. Эту технику следует использовать непосредственно перед закрывающей фигурной скобкой.
console.log('');
//
//
//
// 10. Деструктуризация параметра (параметр - объект) функции:
console.log('10. Деструктуризация параметра (параметр - объект) функции:');
console.log('');

console.log(`const man = {
  name: 'Johny',
  age: 50,
  hairColor: 'black'
}`);
console.log(`function getName({name}){
  return name;
}`);
console.log(`getName(man);`);
console.log(`getName({name: 'Sandy', age:24});`);
console.log('');

const man = {
  name: 'Johny',
  age: 50,
  hairColor: 'black',
};
function getName({ name }) {
  return name;
}
console.log(`Результат деструктуризации параметра функции:`);
console.log(getName(man)); //  Выведет: 'Johny'.
console.log(getName({ name: 'Sandy', age: 24 })); //  Выведет: 'Sandy.' Имя ключа (параметра), который нужно деструктурировать, должно совпадать с именем переменной - псевдонимом, которая используется, чтобы изменить значение самого параметра.
console.log('');
//
//
//
// 11. Деструктуризация параметра (параметр - массив) функции:
console.log('11. Деструктуризация параметра (параметр - массив) функции:');
console.log('');

console.log(`const friends= ['Mike', 'Bill', 'Jill', 'Max'];`);
console.log(`function getBestFriend ([friendOne]){
return friendOne;
}`);
console.log(`getBestFriend(friends);`);
console.log('');

const friends = ['Mike', 'Bill', 'Jill', 'Max'];
function getBestFriend([friendOne, friendTwo, friendThree, friendFour]) {
  return friendThree;
}
console.log(`Результат деструктуризации параметра функции:`);
console.log(getBestFriend(friends)); //  Выведет: 'Jill'.  В передаче параметра(-ов) происходит присваивание переменной соответствующему индексу элемента в исходном массиве, и затем выводится то значение переменной, которую необходимо вернуть из условия тела функции.
console.log('');
//
//
//
// 12. Назначение оставшихся элементов другой переменной:
console.log('12. Назначение оставшихся элементов другой переменной:');
console.log('');

console.log(`const friendsNew = ['Mike', 'Bill', 'Jill', 'Max'];`);
console.log(`function getBestFriendNew([friendOne, ...overFriends]) {
  return overFriends;
}`);
console.log(`getBestFriendNew(friendsNew);`);
console.log('');

const friendsNew = ['Mike', 'Bill', 'Jill', 'Max'];
function getBestFriendNew([friendOne, ...overFriends]) {
  return overFriends;
}
console.log(`Результат назначения оставшихся элементов другой переменной:`);
console.log(getBestFriendNew(friendsNew)); // Выведет: '["Bill", "Jill", "Max"]', используя оператор rest '...'. Эту технику следует использовать непосредственно перед закрывающей скобкой.
console.log('');
//
//
//
// 13. Разрушение вложенного объекта:
console.log('13. Разрушение вложенного объекта:');
console.log('');

console.log(`const user = {
  name: 'Naira Marley',
  age: 12,
  socialMedia: {
    twitter: '@officialnairam1'
  }
}`);
console.log(`function getTwitter({ socialMedia:{twitter} }){
  return twitter;
}`);
console.log(`getTwitter(user);`);
console.log('');

const user = {
  name: 'Naira Marley',
  age: 12,
  socialMedia: {
    twitter: '@officialnairam1',
  },
};
function getTwitter({ socialMedia: { twitter } }) {
  return twitter;
}
console.log(`Результат разрушения вложенного объекта:`);
console.log(getTwitter(user)); // Выведет: '@officialnairam1'.
console.log('');
//
//
//
// 14. Разрушение вложенного массива:
console.log('14. Разрушение вложенного массива:');
console.log('');

console.log(`const colours = ['#000000', [255, 0, 0] , '#ffffff'];`);
console.log(`function getRed([hex_black, [rgb_red, ,], hex_white]){
  return rgb_red;
}`);
console.log(`getRed(colours);`);
console.log('');

const colours = ['#000000', [255, 0, 0], '#ffffff'];
function getRed([hex_black, [rgb_red, ,], hex_white]) {
  return rgb_red;
}
console.log(`Результат разрушения вложенного объекта:`);
console.log(getRed(colours)); // Выведет: '250'.
console.log('');
//
//
//
// 15. Объявление переменных перед использованием в массивах:
console.log('15. Объявление переменных перед использованием в массивах:');
console.log('');

console.log(`let whiteOne, blackOne, greenOne, yellowOne;`);
console.log(
  `[whiteOne, blackOne, greenOne, yellowOne] = ['#ffffff', '#000000','#1ed947', '#fff829'];`
);
console.log(`console.log(greenOne);`);
console.log('');

let whiteOne, blackOne, greenOne, yellowOne;
[whiteOne, blackOne, greenOne, yellowOne] = [
  '#ffffff',
  '#000000',
  '#1ed947',
  '#fff829',
];
console.log(`Результат объявления переменных перед использованием в массивах:`);
console.log(greenOne); // Выведет: '#1ed947'.
console.log('');
//
//
//
// 16. Объявление переменных перед использованием в массивах с использованием значения по умолчанию:
console.log(
  '16. Объявление переменных перед использованием в массивах с использованием значения по умолчанию:'
);
console.log('');

console.log(`let whiteTwo, blackTwo, greenTwo;`);
console.log(`let yellowTwo = 'yellowTwo';`);
console.log(
  `[whiteTwo, blackTwo, greenTwo] = ['#ffffff', '#000000','#1ed947', '#fff829'];`
);
console.log(`console.log(yellowTwo);`);
console.log('');

let whiteTwo, blackTwo, greenTwo;
let yellowTwo = 'yellowTwoVar';
[whiteTwo, blackTwo, greenTwo] = ['#ffffff', '#000000', '#1ed947', '#fff829'];
console.log(
  `Результат объявления переменных перед использованием в массивах с использованием значения по умолчанию:`
);
console.log(yellowTwo); // Выведет: 'yellowTwoVar'.
console.log('');
//
//
//
// 17. Объявление переменных перед использованием в объектах:
console.log('17. Объявление переменных перед использованием в объектах:');
console.log('');

console.log(`let firstName = 'Post';`);
console.log(`let lastName = 'Malone';`);
console.log(`let country = 'U.S.A';`);
console.log(`let firstName, lastName, country;`);
console.log(`let user = {
  firstName: 'Zlatan',
  lastName: 'Ibile',
  country: 'Nigeria'
};`);
console.log(`({ firstName, lastName, country } = user)`);
console.log(`console.log(firstName);`);
console.log('');

let firstNameObj = 'Post';
let lastNameObj = 'Malone';
let countryObj = 'U.S.A';
let firstName, lastName, country;
let userObj = {
  firstNameObj: 'Zlatan',
  lastNameObj: 'Ibile',
  countryObj: 'Nigeria',
};
({ firstNameObj, lastNameObj, countryObj } = userObj);
console.log(`Результат объявления переменных перед использованием в объектах:`);
console.log(firstNameObj); // Выведет: 'Zlatan'. В данном коде используются круглые скобки “()”. Если это не сделать, JavaScript увидит эту стоку как выражение блока, что приведет к ошибке, т.к. блоки кода не появляются в левой части присваивания.
console.log('');
//
//
//
// 18. Смешанная деструктуризация:
console.log('18. Смешанная деструктуризация:');
console.log('');

console.log(`const user = {
  name: 'Janet',
  age: 23,
  sports: ['basketball', 'hockey', 'soccer']
}`);
console.log(`const {name, sports: [firstSport, , lastSport]} = user;`);
console.log(`console.log(firstSport);`);
console.log('');

const userMixed = {
  nameMixed: 'Janet',
  ageMixed: 23,
  sportsMixed: ['basketball', 'hockey', 'soccer'],
};
const {
  nameMixed,
  sportsMixed: [firstSportMixed, , lastSportMixed],
} = userMixed;
console.log(`Результат объявления переменных перед использованием в объектах:`);
console.log(nameMixed); // Выведет: 'basketball'.
console.log('');
