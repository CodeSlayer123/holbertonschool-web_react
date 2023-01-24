const { List } = require('immutable');

export function getListObject(array) {
  const list = List(array);
  return list;
}

export function addElementToList(list, element) {
  return list.push(element);
}
