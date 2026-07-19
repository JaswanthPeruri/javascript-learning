/*


Equality operators are used to compare
two values.

JavaScript provides four equality operators:

1. ==   (Loose Equality)
2. ===  (Strict Equality)
3. !=   (Loose Inequality)
4. !==  (Strict Inequality)

These operators always return:

- true
- false

===========================================
*/

/*
===========================================
1. Loose Equality (==)

Compares only the values.

Before comparison, JavaScript performs
automatic type conversion (Type Coercion).

Syntax:

value1 == value2

===========================================
*/

console.log("Loose Equality (==)");

console.log(10 == 10);
console.log(10 == "10");
console.log(true == 1);
console.log(false == 0);
console.log(null == undefined);

console.log("--------------------------------");

/*
Expected Output

true
true
true
true
true
*/




/*
===========================================
2. Strict Equality (===)

Compares both:

1. Value
2. Data Type

No type conversion is performed.

Syntax:

value1 === value2

===========================================
*/

console.log("Strict Equality (===)");

console.log(10 === 10);
console.log(10 === "10");
console.log(true === 1);
console.log(false === 0);

console.log("--------------------------------");

/*
Expected Output

true
false
false
false
*/




/*
===========================================
Difference Between
== and ===

==

✔ Checks only value.
✔ Performs type conversion.

===

✔ Checks value.
✔ Checks data type.
✔ No type conversion.

===========================================
*/

let a = 20;
let b = "20";

console.log("Using ==");
console.log(a == b);

console.log("Using ===");
console.log(a === b);

console.log("--------------------------------");

/*
Expected Output

Using ==
true

Using ===
false
*/




/*
===========================================
3. Loose Inequality (!=)

Checks whether two values
are NOT equal.

Performs type conversion.

Syntax

value1 != value2

===========================================
*/

console.log("Loose Inequality (!=)");

console.log(10 != 20);
console.log(10 != "10");
console.log(true != 1);

console.log("--------------------------------");

/*
Expected Output

true
false
false
*/




/*
===========================================
4. Strict Inequality (!==)

Checks both value and data type.

No type conversion occurs.

Syntax

value1 !== value2

===========================================
*/

console.log("Strict Inequality (!==)");

console.log(10 !== 20);
console.log(10 !== "10");
console.log(true !== 1);

console.log("--------------------------------");

/*
Expected Output

true
true
true
*/




/*
===========================================
Real-Time Example
===========================================
*/

let password = "admin123";
let enteredPassword = "admin123";

console.log("Login Successful:");
console.log(password === enteredPassword);

console.log("--------------------------------");

let age = 18;

console.log("Eligible to Vote:");
console.log(age === 18);

console.log("--------------------------------");




/*
===========================================
Comparison Table

==

✔ Compares value only
✔ Performs type conversion

===

✔ Compares value
✔ Compares data type
✔ No type conversion

!=

✔ Checks value inequality
✔ Performs type conversion

!==

✔ Checks value inequality
✔ Checks data type
✔ No type conversion

===========================================
*/




/*
===========================================
Expected Output

Loose Equality (==)

true
true
true
true
true

--------------------------------

Strict Equality (===)

true
false
false
false

--------------------------------

Using ==
true

Using ===
false

--------------------------------

Loose Inequality (!=)

true
false
false

--------------------------------

Strict Inequality (!==)

true
true
true

--------------------------------

Login Successful:
true

Eligible to Vote:
true

===========================================
Summary

==   Loose Equality
===  Strict Equality
!=   Loose Inequality
!==  Strict Inequality

Best Practice:
Always use === and !== in modern
JavaScript because they compare both
value and data type without performing
automatic type conversion.

===========================================
*/