// Утилита вывода в консоль
const log = console.log;

/* Миксин NonElementParentNode */

// получаем ссылку на наш список
const listEl = document.getElementById('list'); // ul#list.list - такая запись означает "элемент `ul` с `id === list`" и таким же `class`
log(listEl === window.list); // true
log(listEl); // ul#list.list
log(list); // ul#list.list

/* Миксин ParentNode */

// children — потомки элемента
const { children } = list; // list.children

log(children); // Коллекция HTML, которая представляет собой массивоподобный объект

/*
  HTMLCollection(3)
  0: li#item1.item
  1: li#item2.item
  2: li#item3.item
  length: 3
*/

// Преобразование массивоподобного объекта к массиву
const children1 = Array.from(list.children);
// или
const children2 = [...list.children];

log(children1); // [li#item1.item, li#item2.item, li#item3.item] - обычный массив
log(children2); // [li#item1.item, li#item2.item, li#item3.item] - обычный массив

// firstElementChild — первый потомок — элемент
// lastElementChild — последний потомок — элемент

log(list.firstElementChild); // li#item1.item
log(list.lastElementChild); // li#item2.item

// Утилита создания элемента
const createEl = (id, text, tag = 'li', _class = 'item') => {
  const el = document.createElement(tag);
  el.id = id;
  el.className = _class;
  el.textContent = text;
  return el;
};

// prepend(newNode) — добавляет элемент в начало списка
// append(newNode) — Добавляет элемент в конец списка

// создаем новый элемент
const newItem = createEl('item0', 0);
// и добавляем его в начало списка
list.prepend(newItem);

// создаем еще один элемент
const newItem2 = createEl('item4', 4);
// и добавляем его в конец списка
list.append(newItem2);

log(children); // 5
/*
  HTMLCollection(5)
  0: li#item0.item
  1: li#item1.item
  2: li#item2.item
  3: li#item3.item
  4: li#item4.item
  length: 5
*/

// replaceChildren(nodes) — заменяет потомков новыми элементами

const newItems = [newItem, newItem2];
// заменяем потомков новыми элементами
list.replaceChildren(...newItems); // list.replaceChildren(newItem, newItem2)

log(children); // 2
/*
  HTMLCollection(2)
  0: li#item0.item
  4: li#item4.item
  length: 2
*/

// Утилита для получения элементов:
const getEl = (selector, parent = document, single = true) =>
  single
    ? parent.querySelector(selector)
    : [...parent.querySelectorAll(selector)];

/*
  Утилита принимает 3 аргумента: CSS-селектор, родительский элемент и индикатор
  количества элементов (один или все). 2 аргумента (предок и индикатор) имеют
  значения по умолчанию. Функция возвращает либо один, либо все элементы
  (в виде обычного массива), совпадающие с селектором, в зависимости от значения
  индикатора
*/
const itemWithId0 = getEl('#item0', list);
log(itemWithId0); // li#item0.item

const allItems = getEl('.item', list, false);
log(allItems); // [li#item0.item, li#item4.item]

/* Миксин NonDocumentTypeChildNode */

// previousElementSibling — предыдущий элемент
// nextElementSibling — следующий элемент

log(itemWithId0.previousElementSibling); // null
log(itemWithId0.nextElementSibling); // #item4

/* Миксин ChildNode */

// before(newNode) — вставляет новый элемент перед текущим
// after(newNode) — вставляет новый элемент после текущего

// получаем `li` с `id === item4`
const itemWithId4 = getEl('#item4', list);
// создаем новый элемент
const newItem3 = createEl('item3', 3);
// и вставляем его перед `itemWithId4`
itemWithId4.before(newItem3);

// создаем еще один элемент
const newItem4 = createEl('item2', 2);
// и вставляем его после `itemWithId0`
itemWithId0.after(newItem4);

// replaceWith(newNode) — заменяет текущий элемент новым

// создаем новый элемент
const newItem5 = createEl('item1', 1);
// и заменяем им `itemWithId0`
itemWithId0.replaceWith(newItem5);

// remove() — удаляет текущий элемент
itemWithId4.remove();

/* Интерфейс Node */
// nodeType — тип узла

log(list.nodeType); // 1

// другие варианты
/*
  1 -> ELEMENT_NODE (элемент)
  3 -> TEXT_NODE (текст)
  8 -> COMMENT_NODE (комментарий)
  9 -> DOCUMENT_NODE (document)
  10 -> DOCUMENT_TYPE_NODE (doctype)
  11 -> DOCUMENT_FRAGMENT_NODE (фрагмент) и т.д.
*/

// nodeName — название узла

log(list.nodeName); // UL

// другие варианты
/*
  - квалифицированное название HTML-элемента прописными (заглавными) буквами
  - квалифицированное название атрибута
  - #text
  - #comment
  - #document
  - название doctype
  - #document-fragment
*/

// baseURI — основной путь

log(list.baseURI); // .../index.html

// parentNode — родительский узел
// parentElement — родительский элемент

const itemWithId1 = getEl('#item1', list);

log(itemWithId1.parentNode); // #list
log(itemWithId1.parentElement); // #list

// hasChildNodes() — возвращает true, если элемент имеет хотя бы одного потомка
// childNodes — дочерние узлы

log(list.hasChildNodes()); // true
log(list.childNodes);
/*
NodeList(3)
  0: li#item1.item
  1: li#item2.item
  2: li#item3.item
*/

// firstChild — первый потомок — узел
// lastChild — последний потомок — узел

log(list.firstChild); // #item1
log(list.lastChild); // #item3

// nextSibling — следующий узел
// previousSibling — предыдущий узел

log(itemWithId1.nextSibling); // #item2
log(itemWithId1.previousSibling); // null

// textContent — геттер/сеттер для извлечения/записи текста

// получаем текст
log(itemWithId1.textContent); // 1
// меняем текст
itemWithId1.textContent = 'item1';
log(itemWithId1.textContent); // item1

// получаем текстовое содержимое всех потомков
log(list.textContent); // item123

// Для извлечения/записи текста существует еще один (устаревший) геттер/сеттер — innerText

// cloneNode(deep) — копирует узел
/*
  Принимает логическое значение, определяющее характер копирования:
  поверхностное — копируется только сам узел,
  глубокое — копируется сам узел и все его потомки
*/

// создаем новый список посредством копирования существующего
const newList = list.cloneNode(false);
// удаляем у него `id` во избежание коллизий
newList.removeAttribute('id');
// меняем его текстовое содержимое
newList.textContent = 'new list';
// и вставляем его после существующего списка
list.after(newList);

// создаем еще один список
const newList2 = newList.cloneNode(true);
newList.after(newList2);

// isEqualNode(node) — сравнивает узлы
// isSameNode(node) — определяет идентичность узлов

log(newList.isEqualNode(newList2)); // true
log(newList.isSameNode(newList2)); // false

// contains(node) — возвращает true, если элемент содержит указанный узел
log(list.contains(itemWithId1)); // true

// insertBefore(newNode, existingNode) — добавляет новый узел (newNode) перед существующим (existingNode)

// создаем новый элемент
const itemWithIdA = createEl('#item_a', 'a');
// и вставляем его перед `itemWithId1`
list.insertBefore(itemWithIdA, itemWithId1);

// appendChild(node) — добавляет узел в конец списка

// создаем новый элемент
const itemWithIdC = createEl('#item_c', 'c');
// и добавляем его в конец списка
list.appendChild(itemWithIdC);

// replaceChild(newNode, existingNode) — заменяет существующий узел (existingNode) новым (newNode)

// создаем новый элемент
const itemWithIdB = createEl('item_b', 'b');
// и заменяем им `itemWithId1`
list.replaceChild(itemWithIdB, itemWithId1);

// removeChild(node) — удаляет указанный дочерний узел

// получаем `li` с `id === item2`
const itemWithId2 = getEl('#item2', list);
// и удаляем его
list.removeChild(itemWithId2);
