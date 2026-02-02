/**
 * map / filter / reduce worksheet
 * Run with: node worksheet.js
 *
 * Instructions:
 * 1) Complete each TODO using ONLY map, filter, and reduce.
 * 2) Do NOT use for/while loops.
 * 3) Keep the console logs — they are your self-checks.
 * 4) Submit this file when finished.
 *
 * Important:
 * - For each TODO, write your prediction FIRST (in the comment block).
 * - Then write the code.
 */

// ------------------------------------------------------------
// DATA
// ------------------------------------------------------------

const names = ["anatoly", "bobby", "carlsen", "gary", "fabiano"];
const primes = [1, 2, 3, 5, 7, 11, 13]; // Note: 1 is not prime, kept for practice.

const users = [
  { name: "anatoly", rating: 2848 },
  { name: "bobby", rating: 2785 },
  { name: "carlsen", rating: 2882 },
  { name: "gary", rating: 2851 },
  { name: "fabiano", rating: 2844 },
];

const data = [23, 44, undefined, 12, undefined, 59, 83, 13, 42, 71, undefined];

// ------------------------------------------------------------
// HELPERS (do not edit)
// ------------------------------------------------------------

function section(title) {
  console.log("\n" + "-".repeat(60));
  console.log(title);
  console.log("-".repeat(60));
}

function show(label, value, expected) {
  console.log(`${label}:`, value);
  if (expected !== undefined) console.log(`expected:`, expected);
}

// ------------------------------------------------------------
// PART 0 — WARMUP EXAMPLE (provided)
// ------------------------------------------------------------

section("PART 0 — WARMUP (example provided)");

const upperNames = names.map((name) => name.toUpperCase());
show("upperNames", upperNames, ["ANATOLY", "BOBBY", "CARLSEN", "GARY", "FABIANO"]);

// ------------------------------------------------------------
// PART 1 — MAP
// map transforms every item and returns a new array (same length).
// ------------------------------------------------------------

section("PART 1 — MAP");

/**
 * TODO 1: Map `names` to an array of first 3 letters.
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * ["ana","bob","car","gar","fab"]
 */
const threeLetterNames = names.map((name) => name.slice(0, 3));
show("threeLetterNames", threeLetterNames, ["ana", "bob", "car", "gar", "fab"]);

/**
 * TODO 2: Map `primes` to squares.
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * [1,4,9,25,49,121,169]
 */
const primeSquares = primes.map((num) => num * num);
show("primeSquares", primeSquares, [1, 4, 9, 25, 49, 121, 169]);

/**
 * TODO 3: Map `users` to just user names.
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * ["anatoly","bobby","carlsen","gary","fabiano"]
 */
const userNames = users.map((user) => user.name);
show("userNames", userNames, ["anatoly", "bobby", "carlsen", "gary", "fabiano"]);

/**
 * TODO 4: Map `users` to description strings like:
 * "anatoly rating: 2848"
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * ["anatoly rating: 2848", "bobby rating: 2785", ...]
 */
const userDescriptions = users.map((user) => `${user.name} rating: ${user.rating}`);
show("userDescriptions", userDescriptions, [
  "anatoly rating: 2848",
  "bobby rating: 2785",
  "carlsen rating: 2882",
  "gary rating: 2851",
  "fabiano rating: 2844",
]);

// ------------------------------------------------------------
// PART 2 — FILTER
// filter keeps items that return true (new array, same or shorter length).
// ------------------------------------------------------------

section("PART 2 — FILTER");

/**
 * TODO 5: Filter `names` to those starting with "b".
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * ["bobby"]
 */
const bNames = names.filter((name) => name.startsWith("b"));
show("bNames", bNames, ["bobby"]);

/**
 * TODO 6: Filter `primes` to numbers greater than 10.
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * [11,13]
 */
const overTen = primes.filter((num) => num > 10);
show("overTen", overTen, [11, 13]);

/**
 * TODO 7: Filter `users` to rating > 2850.
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * [{ name: "carlsen", rating: 2882 }, { name: "gary", rating: 2851 }]
 */
const strongUsers = users.filter((user) => user.rating > 2850);
show("strongUsers", strongUsers, [
  { name: "carlsen", rating: 2882 },
  { name: "gary", rating: 2851 },
]);

// ------------------------------------------------------------
// PART 3 — REDUCE
// reduce combines all items into ONE value. Always provide an initial value.
// ------------------------------------------------------------

section("PART 3 — REDUCE");

/**
 * TODO 8: Reduce `names` into the first letters as one string.
 * Example: ["anatoly","bobby","carlsen"] -> "abc"
 *
 * Prediction:
 * - final type:
 *
 * Expected:
 * "abcgf"
 */
const initials = names.reduce((acc, name) => acc + name[0], "");
show("initials", initials, "abcgf");

/**
 * TODO 9: Reduce `primes` to the total sum.
 *
 * Prediction:
 * - final type:
 *
 * Expected:
 * 42
 */
const primeSum = primes.reduce((acc, num) => acc + num, 0);
show("primeSum", primeSum, 42);

/**
 * TODO 10: Reduce `users` into an object mapping name -> rating.
 *
 * Prediction:
 * - final type:
 *
 * Expected:
 * { anatoly: 2848, bobby: 2785, carlsen: 2882, gary: 2851, fabiano: 2844 }
 */
const ratingsByName = users.reduce((acc, user) => {
  acc[user.name] = user.rating;
  return acc;
}, {});
show("ratingsByName", ratingsByName, {
  anatoly: 2848,
  bobby: 2785,
  carlsen: 2882,
  gary: 2851,
  fabiano: 2844,
});

// ------------------------------------------------------------
// PART 4 — COMBINE METHODS (CHAINING)
// ------------------------------------------------------------

section("PART 4 — COMBINE METHODS");

/**
 * TODO 11: Filter `primes` to numbers < 10, then reduce to sum.
 *
 * Prediction:
 * - final type:
 *
 * Expected:
 * 18  (1+2+3+5+7)
 */
const underTenSum = primes
  .filter((num) => num < 10)
  .reduce((acc, num) => acc + num, 0);
show("underTenSum", underTenSum, 18);

/**
 * TODO 12: Filter `users` to rating > 2850, then map to description strings.
 *
 * Prediction:
 * - result length:
 * - item type:
 *
 * Expected:
 * ["carlsen rating: 2882", "gary rating: 2851"]
 */
const topUserStrings = users
  .filter((user) => user.rating > 2850)
  .map((user) => `${user.name} rating: ${user.rating}`);
show("topUserStrings", topUserStrings, ["carlsen rating: 2882", "gary rating: 2851"]);

/**
 * TODO 13: Filter out undefined values from `data`, then reduce to sum.
 *
 * Prediction:
 * - final type:
 *
 * Expected:
 * 347
 */
const dataSum = data
  .filter((value) => value !== undefined)
  .reduce((acc, num) => acc + num, 0);
show("dataSum", dataSum, 347);

// ------------------------------------------------------------
// REFLECTION (students fill in answers)
// ------------------------------------------------------------

section("REFLECTION (write answers below as comments)");

/**
 * 1) When should you use map instead of filter?
 * It is only if you want to transform evey element and keep the same number of items filter is only used to select a subset of elements.
 * 2) Why does map always return the same number of items?
 * It transforms each element in the array, so the output array has the same length as the input array.
 * 3) What role does the accumulator play in reduce?
 * The accumulator accumulates the callback's return values; it is the accumulated value previously returned in the last invocation of the callback, or the initial value, if supplied.
 * 4) Which problem was hardest—and why?
 * For me, number 12 because at first I did not understand it and it took me a while to figure out how to chain filter and map together.

// ------------------------------------------------------------
// END
// ------------------------------------------------------------

section("DONE (If any values show `null`, you still have TODOs!)");