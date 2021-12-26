# Values, Types, and Operators

This chapter is mostly brushing on up concepts I'm familiar with. I took note of things I especially want to remember.

## Numbers

JavaScript uses 64 bits to store numbers. With N decimal digits, you can represent 10<sup>N</sup> numbers. Similarly, given 64 binary digits, you can represent 2<sup>64</sup> different numbers, which is about 18 quintillion (an 18 with 18 zeros after it).

Not all whole numbers less than 18 quintillion fit in a JS number, though. Those bits also store negative numbers, so one bit indicates the sign of the number. A bigger issue is that nonwhole numbers must also be represented. To do this, some of the bits are used to store the position of the decimal point.

> The actual maximum whole number that can be stored [in JavaScript] is more in the range of 9 quadrillion (15 zeros).

## Operators

### Precedence

The rules of precedence are not something you should worry about. When in doubt, just add parentheses.

## Strings

JavaScript uses UTF-16 for string element representation. UTF-16 uses surrogate pairs to represent some characters such as some emoji and scripts. JavaScript's string methods count code points rather than characters, which means that some strings that appear to have 1 character will have a length of 2 as JS counts the code points on the surrogate pair.

Example:

```javascript
'🍌'.length; // returns 2
```

This makes working with text, and especially localization, especially difficult in JavaScript, so it's a good idea to make use of pre-built libraries that have already solved this problem.

## Comparison

> `NaN` is supposed to denote the result of a nonsensical computation, and as such, it isn't equal to the result of any _other_ nonsensical computations.

For this reason `NaN === NaN` returns `false`

If you need to check whether a value is `NaN` you can use `Number.isNaN(value)` and if you need to confirm whether the value that you have is the literal `NaN` value, you can do `value !== value` which should return `true` if `value` is literal `NaN` as that's the only value in JS that is not equal to itself.

## Short-circuiting logical operators

When an operator is said to short-circuit, it means that it stops evaluating an expression after it encounters a given value, either `true` or `false`

The two main cases are `&&` logical AND, and `||` logical OR.

### && - Logical AND

`&&` returns `true` if, and only if all sub-expressions being compared with it resolve to `true`, it returns `false` otherwise.

Since all sub-expressions must resolve to `true`, `&&` stops evaluating sub-expressions as soon as it encounters the first `false` value, the whole expression can no longer be `true` so it doesn't bother with subsequent values.

This is how `&&` short-circuits, it returns the first `false` value it encounters, or the last value if the entire expression resolves to `true`

Example:

```javascript
1 && 0; // returns 0 since it's a falsy value
0 && 1; // returns 0, doesn't evaluate 1
```

### || - Logical OR

`||` has the opposite short-circuit behavior o `&&`, it returns the first `true` value it encounters, or the last `false` value if the entire expression evaluates to `false`

Example:

```javascript
1 || 0; // returns 1, doesn't evaluate 0
0 || null; // returns null, the last false value in the expression
```

### What is short-circuit useful for?

If you have a variable that must be set to the return value of an expression which might return `false`, `null`, `undefined` or otherwise _falsy_ you can make sure that your variable will always have a default value by using `||` to assign the value on the right if the expression doesn't return a _truthy_ value.

Example:

```javascript
let locale = getLocale() || 'en';
// If the getLocale() function fails to get the user's locale, set locale to "en" so your app still works even if you can't get the user's locale
```
