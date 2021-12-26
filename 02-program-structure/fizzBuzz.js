/* 
Write a program that uses console.log to print 
all the numbers from 1 to 100, with two exeptions.
For numbers divisible by 3, print 'Fizz'
For numbers divisible by 5 (and not divisible by 3) print 'Buzz'
*/

const fizzOrBuzz = () => {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
  }
};

/* 
Modify the program to print 'FizzBuzz' for numbers that are divisible by both 3 and 5
Still print 'Fizz' or 'Buzz' for numbers divisible by only one of those
*/

const fizzBuzz = () => {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(number);
    }
  }
};
