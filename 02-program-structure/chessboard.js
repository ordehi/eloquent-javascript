/* 
Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a hash '#' character.

Passing this string to console.log should show something like this:

 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #  
 */

const chessboardFixed = () => {
  let string = '';
  for (let columns = 1; columns <= 8; columns += 1) {
    if (columns % 2 === 0) {
      string += '#';
    } else {
      string += ' ';
    }
  }
  string += '\n';
  let line = string;
  for (let rows = 1; rows < 8; rows += 1) {
    string += line;
  }
  return string;
};

/* 
When you have a program that generates this pattern,
 define a binding size = 8 and change the program so that it works for any size,
  outputting a grid of the given width and height
 */

const chessboard = (size = 8) => {
  let string = '';
  for (let columns = 1; columns <= size; columns += 1) {
    if (columns % 2 === 0) {
      string += '#';
    } else {
      string += ' ';
    }
  }
  string += '\n';
  let line = string;
  for (let rows = 1; rows < size; rows += 1) {
    string += line;
  }
  return string;
};
