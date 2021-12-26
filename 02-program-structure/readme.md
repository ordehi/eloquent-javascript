# Program Structure

This again brushes up on stuff I knew. I took note of things I want to remember even if I already know them.

## Expressions and Statements

A fragment of code that produces a value is an _expression._

Examples:

```javascript
22; // a number evaluates to the value it represents
('psychoanalysis'); // similar to the above but a string
2 + 2; // this is an expression with two sub-expressions, each number evaluates to 2, then they're added and the whole thing evaluates to 4
```

If an expressions corresponds to a sentence fragment, a JavaScript _statement_ corresponds to a full sentence. A program is a list of statements.

The simplest kind of statement is an expression with a semicolon after it:

```javascript
1;
!false;
```

A statement stands on its own, so it amounts to something only if it affects the world. It could display something on the screen--that counts as changing the world--or it could change the internal state of the machine in a way that will affect the statements that come after it. These changes are called _side effects_.

## Bindings

I like using the word _binding_ for variables because I feel it more accurately illustrates their behavior and helps newcomers understand them without getting confused about how variables work in math.

- Variables in programming are not typically unknown. Newcomers I've shared my learnings with tend to compare variables to those of algebra and think of them as unknowns
- Variables are often, and ideally, immutable in programming, which goes against the word variable as many understand it
- A variable is more like a tentacle than a box, because it can "grasp" different values at different points in time, the word "binding" makes that more clear

Still, I'm not saying we shouldn't use the word variable, it has its uses, but I think talking about bindings is a useful teaching mechanism.
