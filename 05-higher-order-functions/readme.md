# Higher-Order Functions

> A large program is a costly program, and not just because of the time it takes to build. Size almost always involves complexity, and complexity confuses programmers. Confused programmers, in turn, introduce mistakes (_bugs_) into programs. A large program then provides a lot of space for these bugs to hide, making them hard to find.

Code that expresses a solution in a vocabulary taht corresponds to the problem being solved is usually more likely to be correct. For example:

```js
sum(range(1, 10));
```

Expresses the sum of a range in terms with which we're familiar, rather than in loops and counters.

## Abstraction

> Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

> It is a useful skill, in programming, to notice when you are working at too low a level of abstraction.

## Abstracting Repetition

It is common for a program to do something a given number of times. You can write a `for` loop for that, like this:

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Can we abstract "doing something _N_ times" as a function?

```js
function printNTimes(n, message) {
  for (let i = 0; i < n; i++) {
    console.log(message);
  }
}
```

But what if we want to do somethign other than logging?

> Since "doing something" can be represented as a function and functions are just values, we can pass our action as a function value.

```js
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
```

Often, it is easier to create a function value on the spot instead.

```js
let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);
```

## Higher-order functions

> Functions that operate on other functions, either by taking them as arguments or by returning them, are called _higher-order functions_.

> Higher-order functions allow us to abstract over _actions_, not just values.

They come in several forms.

Functions that create new functions:

```javascript
function greaterThan(n) {
  return (m) => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
```

Functions that change other functions:

```javascript
function noisy(f) {
  return (...args) => {
    console.log('calling with', args);
    let result = f(...args);
    console.log('called with', args, ', returned', result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
```

Functions that provide new types of control flow:

```javascript
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 === 1, () => {
    console.log(n, 'is even');
  });
});
```
