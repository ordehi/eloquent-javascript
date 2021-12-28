/* 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

/* 
reverseArray

START
# Given an array called array

SET reversed = []
SET counter = 0
WHILE counter <= array.length
  - SET counter.unshift(array[counter])
  - SET counter += 1

RETURN reversed
END
*/

const reverseArray = (array) => {
  let reversed = [];

  for (let item of array) {
    reversed.unshift(item);
  }

  return reversed;
};

// Also

const reverseArrayFE = (array) => {
  let reversed = [];

  array.forEach((item) => reversed.unshift(item));

  return reversed;
};

/* 
reverseArrayInPlace

*/

const reverseArrayInPlace = (array) => {
  let halfLength = Math.floor(array.length / 2);
  let currentElement;

  for (let counter = 0; counter < halfLength; counter += 1) {
    currentElement = array[counter];
    array[counter] = array[array.length - 1 - counter];
    array[array.length - 1 - counter] = currentElement;
  }
};
