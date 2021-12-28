# Data Structures: Objects and Arrays

Mostly gotchas I want to remember.

## Properties

### Accessing Properties

When using a dot, the word after the dot is the literal name of the property.

When using square brackets, the expression between the brackets is evaluated to get the property name.

Whereas `value.x` fetches the property of value named "x", `value[x]` tries to evaluate the expression `x` and uses the result, converted to a string, as the property name.

To find the length of an array, you typically write `array.length` because that's easier to write than `array["length"]`. Likewise, since you can't access number properties with dot notation (`array.0` wouldn't work), you access array indices with bracket notation as in `array[0]`.
