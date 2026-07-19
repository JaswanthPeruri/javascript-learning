/*

Arithmetic operators are used to perform
mathematical operations on numbers.

Operators:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%)
6. Exponentiation (**)
7. Increment (++)
8. Decrement (--)

===========================================
*/

// Declaring Variables
let a = 5;
let b = 2;

console.log("a =", a);
console.log("b =", b);

console.log("--------------------------------");

/*
===========================================
1. Addition (+)
Adds two numbers.
===========================================
*/

console.log("Addition");
console.log("a + b =", a + b);

console.log("--------------------------------");

/*
===========================================
2. Subtraction (-)
Subtracts one number from another.
===========================================
*/

console.log("Subtraction");
console.log("a - b =", a - b);

console.log("--------------------------------");

/*
===========================================
3. Multiplication (*)
Multiplies two numbers.
===========================================
*/

console.log("Multiplication");
console.log("a * b =", a * b);

console.log("--------------------------------");

/*
===========================================
4. Division (/)
Divides one number by another.
===========================================
*/

console.log("Division");
console.log("a / b =", a / b);

console.log("--------------------------------");

/*
===========================================
5. Modulus (%)
Returns the remainder after division.
===========================================
*/

console.log("Modulus");
console.log("a % b =", a % b);

console.log("--------------------------------");

/*
===========================================
6. Exponentiation (**)
Raises a number to the given power.
===========================================
*/

console.log("Exponentiation");
console.log("a ** b =", a ** b);

console.log("--------------------------------");

/*
===========================================
7. Increment (++)
Increases the value by 1.

Types:
1. Pre Increment (++a)
2. Post Increment (a++)
===========================================
*/

let x = 10;

console.log("Initial Value =", x);

// Pre Increment
console.log("Pre Increment (++x) =", ++x);
console.log("Value of x =", x);

console.log("--------------------------------");

let y = 10;

// Post Increment
console.log("Post Increment (y++) =", y++);
console.log("Value of y =", y);

console.log("--------------------------------");

/*
===========================================
8. Decrement (--)
Decreases the value by 1.

Types:
1. Pre Decrement (--a)
2. Post Decrement (a--)
===========================================
*/

let p = 10;

console.log("Initial Value =", p);

// Pre Decrement
console.log("Pre Decrement (--p) =", --p);
console.log("Value of p =", p);

console.log("--------------------------------");

let q = 10;

// Post Decrement
console.log("Post Decrement (q--) =", q--);
console.log("Value of q =", q);

console.log("--------------------------------");

/*
===========================================
Expected Output

a = 5
b = 2

Addition
a + b = 7

Subtraction
a - b = 3

Multiplication
a * b = 10

Division
a / b = 2.5

Modulus
a % b = 1

Exponentiation
a ** b = 25

Pre Increment (++x) = 11
Value of x = 11

Post Increment (y++) = 10
Value of y = 11

Pre Decrement (--p) = 9
Value of p = 9

Post Decrement (q--) = 10
Value of q = 9
===========================================
*/