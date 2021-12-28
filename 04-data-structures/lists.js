/* 
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

*/

/* 
arrayToList

START
# Given an array called array

SET list = null
SET counter = array.length - 1
SET level = list.rest --- might not need since counter does the same

WHILE counter >= 0
  - SET list = {value: array[counter], rest: list}

RETURN list

END
*/

const arrayToList = (array) => {
  let list = null;
  for (let index = array.length - 1; index >= 0; index -= 1) {
    list = {
      value: array[index],
      rest: list,
    };
  }

  return list;
};

/* 
Also write a listToArray function that produces an array from a list.
*/

/* 
listToArray

START

# Given a list which is an object where each element has a reference to the next element

SET array = []

WHILE list != null
  - SET current = list.value
  - SET array.push(current)
  - SET listCopy = listCopy.rest

RETURN array

END
*/

const listToArray = (list) => {
  let array = [];

  while (list != null) {
    let current = list.value;
    array.push(current);
    list = list.rest;
  }

  return array;
};

/* 
 Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

 Can use Object.values for this

 level = list.value
 find if element is in level.value
 else level = level.rest

*/

// Doesn't work, need to fix it
const prepend = (element, list) => {
  list = { value: element, rest: list };
};

const nth = (list, index) => {
  let count = 0;
  for (let place = list; place; place = place.rest) {
    if (count == index) {
      return place.value;
    } else {
      count += 1;
    }
  }

  return undefined;
};
