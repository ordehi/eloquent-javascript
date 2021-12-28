/* 
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
*/

/* 
Algorithm:
# Given a string value called string

- Set a variable totalBs to 0
- Iterate through the characters of string one by one
- If the current character is an uppercase "B", add 1 to totalBs

- Return totalBs

*/

const countBs = (string) => {
  let totalBs = 0;
  for (let character of string) {
    if (character === 'B') totalBs += 1;
  }
  return totalBs;
};

/* 
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

const countChar = (string, charToCount) => {
  let totalCharToCount = 0;
  for (let character of string) {
    if (character === charToCount) totalCharToCount += 1;
  }
  return totalCharToCount;
};
