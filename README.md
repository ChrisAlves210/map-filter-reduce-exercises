# JavaScript Arrays: map, filter, and reduce

What you already know (from Python)

In Python, you’ve written loops like this:

```python
result = []
for name in names:
    result.append(name.upper())
```

JavaScript gives us array methods that do the same work without writing the loop ourselves.
  - map → transform every item
  - filter → keep some items, drop others
  - reduce → combine all items into one value

The goal of this worksheet is to help you understand what each method does, not just how to write it.

Rules for this worksheet
  - ❌ Do not use for or while loops
  - ✅ Use only map, filter, and reduce
  - ✍️ Write predictions before writing code
  - 🧠 If you use AI, only use it after you have a prediction written

## Data Sets

```js
const names = ["anatoly", "bobby", "carlsen", "gary", "fabiano"];

const primes = [1, 2, 3, 5, 7, 11, 13];

const users = [
  { name: "anatoly", rating: 2848 },
  { name: "bobby", rating: 2785 },
  { name: "carlsen", rating: 2882 },
  { name: "gary", rating: 2851 },
  { name: "fabiano", rating: 2844 },
];
```

## Part 1 — map

What map does
  - Loops over every item in an array
  - Transforms each item
  - Returns a new array of the same length

Example (given)

```js
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
```

Before You Code (REQUIRED)

For each problem below, answer in comments:
	1.	How many items will the result array have?
	2.	What type will each item be?

## Problem 1 — First 3 Letters

Prediction (write before coding):

```JS
// length: ?
// item type: ?
```

Task:
Map names to a new array containing only the first 3 letters of each name.

```JS
const threeLetterNames = null;
console.log(threeLetterNames);
```

## Problem 2 — Squares

Prediction:

```JS
// length: ?
// item type: ?
```

Task:
Map primes to a new array of squared values.

```JS
const primeSquares = null;
console.log(primeSquares);
```

## Problem 3 — User Names Only

Prediction:

```JS
// length: ?
// item type: ?
```

Task:
Map users to an array of name strings only.

```JS
const userNames = null;
console.log(userNames);
```

## Problem 4 — User Descriptions

Prediction:

```JS
// length: ?
// item type: ?
```

Task:
Map users to strings like:

"anatoly rating: 2848"

```JS
const userDescriptions = null;
console.log(userDescriptions);
```

## Part 2 — filter

What filter does
  - Loops over every item
  - Keeps items that return true
  - Drops items that return false
  - Returns a new array (same or smaller size)

## Problem 5 — Names Starting with “b”

Prediction:

```JS
// length: ?
// item type: ?
```

Task:
Filter names to only those starting with "b".

```JS
const bNames = null;
console.log(bNames);
```

## Problem 6 — Numbers Greater Than 10

Prediction:

```JS
// length: ?
// item type: ?
```

Task:
Filter primes to numbers greater than 10.

```JS
const overTen = null;
console.log(overTen);
```

## Problem 7 — High Rated Players

Prediction:

```JS
// length: ?
// item type: ?
```

Task:
Filter users to those with a rating greater than 2850.

```JS
const strongUsers = null;
console.log(strongUsers);
```

## Part 3 — reduce

What reduce does
  - Combines all items into one value
  - Uses an accumulator
  - Always needs an initial value

## Problem 8 — First Letters String

Prediction:

```JS
// final type: ?
```

Task:
Reduce names into a string made from the first letter of each name.

```JS
const initials = null;
console.log(initials);
```

## Problem 9 — Sum of Numbers

Prediction:

```JS
// final type: ?
```

Task:
Reduce primes to the total sum.

```JS
const primeSum = null;
console.log(primeSum);
```

## Problem 10 — Object from Array

Prediction:

// final type: ?

Task:
Reduce users into an object like:

```JS
{
  anatoly: 2848,
  bobby: 2785,
  ...
}

const ratingsByName = null;
console.log(ratingsByName);
```

## Part 4 — Combining Methods

You can chain array methods because each one returns a new array.

## Problem 11 — Filter Then Reduce

Prediction:

```JS
// final type: ?
```

Task:
Filter primes to numbers less than 10, then reduce to their sum.

```JS
const underTenSum = null;
console.log(underTenSum);
```

## Problem 12 — Filter Then Map

Prediction:

```JS
// length: ?
// item type: ?
```

Task:
Filter users to ratings above 2850, then map to description strings.

```JS
const topUserStrings = null;
console.log(topUserStrings);
```

## Problem 13 — Cleaning Data

```JS
const data = [23, 44, undefined, 12, undefined, 59, 83, 13, 42, 71, undefined];
```

Prediction:

```JS
// final type: ?
```

Task:
Filter out undefined, then reduce to the total sum.

```JS
const dataSum = null;
console.log(dataSum);
```

Final Reflection (answer in writing)
	1.	When should you use map instead of filter?
	2.	Why does map always return the same number of items?
	3.	What role does the accumulator play in reduce?
	4.	Which problem was hardest—and why?
