/* 
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/

/* 
Algorithm:
# Given a positive integer value called number

- If number is 0, return true
- If number is 1, return false
- isEven(number - 2)
*/

const isEven = (number) => {
  if (number === 0) return true;
  if (number === 1) return false;

  return number > 0 ? isEven(number - 2) : isEven(number + 2);
};

/* 
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

/* Fixed it by checking whether the number is below or above 0 and doing the recursive call based on that. 

Could have also sent Math.abs(number) - 2 to fix it

*/
