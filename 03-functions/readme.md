# Functions

## Scope

### Lexical scoping

Each scope can "look out" into the scope around it. [...] The exception is when multiple bindings have the same name--in that case, code can see only the innermost one.

The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called _lexical scoping_

## Functions as values

In JS, functions are first-class citizens. That means they can be stored as and passed as values, pass them as arguments to other functions, return them from other functions (such as in factory function and closures).

## Closures

Closures are a good demonstration of the fact that local bindings are created anew for every call, and different calls can't trample on one another's local bindings.

Being able to reference a specific instance of a local binding in an enclosing scope is called _closure_. A function that references bindings from local scopes around it is called a _closure_.

Example:

```javascript
function multiplier(factor) {
  return (number) => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// -> 10
```

> When called, the function body sees the environment in which it was created, not the environment in which it was called.

## Recursion

There's a dilemma of speed versus elegance when it comes to recursion. Typical JavaScript implementations, it's about tree times faster to use a simple loop than to use recursion in functions.

You can see this as a kind of continuum between human-friendliness and machine-friendliness. Almost any program can be made faster by making it bigger and more convoluted. The programmer has to decide on an appropriate balance.

> Worrying about efficiency can be a distraction. It's yet another factor that complicates program design, and when you're doing someting that's already difficult, that extra thing to worry about can be paralyzing.
>
> Therefore, always start by writing something that's correct and easy to understand. If you're worried that it's too slow--which it usually isn't since most code simply isn't executed often enough to take any significant amount of time--you can measure afterward and improve it if necessary.

### A good usage of recursion

Recursion is not always an inefficient alternative to looping. Some problems really are easier to solve with recursion. Most often, these are problems that require exploring or processing several "branches", each of which might branch out again into even more branches.

Consider a puzzle that starts from number 1 and repeatedly either adds 5 or multiplies by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number?

Here's a recursive solution:

```javascript
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, '1');
}

console.log(findSolution(24));
// -> (((1 * 3) + 5) * 3)
```

Note that this program doesn't necessarily find the _shortest_ sequence of operations. It is satisfied when it finds any sequence at all.

Here's an example of how the function works given the number 13:

```
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
```

The indentation indicates the depth of the calls stack.

## Growing Functions

There are two more or less natural ways for functions to be introduced into programs.

The first is that you find yourself writing similar code multiple times. You'd prefer not to do that. So you take the repeated functionality, find a good name for it, and put it into a function.

The second way is that you find you need some functionality that you haven't written yet and that sounds like it deserves its own function. You'll start by naming the function, and then you'll write its body. You might even start writing code that uses the function before you actually define the function itself.

> How difficult it is to find a good name for a function is a good indication of how clear a concept i is that you're trying to wrap.

If you find yourself conflating operations that shouldn't be together (such as printing, zero-padding, and adding a label), it's probably time to separate the functionality into different functions.

### How smart and versatile should our function be?

A useful principle is not to add cleverness unless you are absolutely sure you're going to need it. It can be tempting to write general "frameworks" for every bit of functionality you come across. Resist that urge. You won't get any real work done--you'll just be writing code that you never use.

## Pure functions

A _pure_ function is a specific kind of value-producing function that not only has no side effects but also doesn't rely on side effect from other code--for example, it doesn't read global bindings whose value might change.

A pure function has the pleasant quality that, when called with the same arguments, it always produces the same value.
