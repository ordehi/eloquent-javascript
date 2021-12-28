/* 
The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
*/

/* 
Algorithm
# Given two integer arguments, start and end

- Set variable top to end + 1
- Create a collection called rangeArray with top - start elements where values are the keys of each index
- Map the collection so that each value = value + start

- Return rangeArray
*/

const range = (start, end) => {
  return [...Array(end + 1 - start).keys()].map((value) => value + start);
};

// Trying to be clever here and exploring different methods, a more performant and idiomatic solution is probably the following

function rangeP(start, end) {
  let rangeArray = [];
  for (let counter = start; counter <= end; counter += 1) {
    rangeArray.push(counter);
  }
  return rangeArray;
}

/* 
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/

/* 
Algorithm
# Given a collection of numbers called range

- Iterate through each number in range
- Start an accumulator with the value of the first number in range
- At each iteration, add the current number to accumulator
- Return accumulator

Low level:

START

READ range
SET accumulator = range[0]
SET counter = 1
SET current = range[counter]
WHILE current is within range.length
  - SET accumulator = accumulator + current
  - SET counter = counter + 1

PRINT accumulator

END

*/

const sum = (range) => {
  return range.reduce((acc, curr) => acc + curr);
};

/* 
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function rangeWithStep(start, end, step) {
  let rangeArray = [];
  let decrement = step < 0;

  if ((start > end && !decrement) || (decrement && start < end))
    [start, end] = [end, start];

  for (
    let counter = start;
    decrement ? counter >= end : counter <= end;
    counter += step
  ) {
    rangeArray.push(counter);
  }

  return rangeArray;
}
