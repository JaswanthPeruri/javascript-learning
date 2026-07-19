/*


Assignment operators are used to assign
values to variables.

Operators:
1. =
2. +=
3. -=
4. *=
5. /=
6. %=
7. **=

===========================================
*/

// Declaring Variables
let a = 10;
let b = 5;

console.log("Initial Values");
console.log("a =", a);
console.log("b =", b);

console.log("--------------------------------");

/*
===========================================
1. Assignment Operator (=)

Assigns the value on the right side
to the variable on the left side.
===========================================
*/

let x = 20;

console.log("Assignment Operator (=)");
console.log("x =", x);

console.log("--------------------------------");

/*
===========================================
2. Addition Assignment (+=)

a += b

Equivalent to:
a = a + b
===========================================
*/

let add = 10;

console.log("Before += :", add);

add += 5;

console.log("After += :", add);

console.log("--------------------------------");

/*
===========================================
3. Subtraction Assignment (-=)

a -= b

Equivalent to:
a = a - b
===========================================
*/

let sub = 10;

console.log("Before -= :", sub);

sub -= 5;

console.log("After -= :", sub);

console.log("--------------------------------");

/*
===========================================
4. Multiplication Assignment (*=)

a *= b

Equivalent to:
a = a * b
===========================================
*/

let mul = 10;

console.log("Before *= :", mul);

mul *= 5;

console.log("After *= :", mul);

console.log("--------------------------------");

/*
===========================================
5. Division Assignment (/=)

a /= b

Equivalent to:
a = a / b
===========================================
*/

let div = 10;

console.log("Before /= :", div);

div /= 5;

console.log("After /= :", div);

console.log("--------------------------------");

/*
===========================================
6. Modulus Assignment (%=)

a %= b

Equivalent to:
a = a % b
===========================================
*/

let mod = 10;

console.log("Before %= :", mod);

mod %= 3;

console.log("After %= :", mod);

console.log("--------------------------------");

/*
===========================================
7. Exponentiation Assignment (**=)

a **= b

Equivalent to:
a = a ** b
===========================================
*/

let power = 5;

console.log("Before **= :", power);

power **= 2;

console.log("After **= :", power);

console.log("--------------------------------");

/*
===========================================
Multiple Assignment Example
===========================================
*/

let marks = 80;

console.log("Initial Marks =", marks);

marks += 10;
console.log("After Bonus =", marks);

marks -= 5;
console.log("After Deduction =", marks);

marks *= 2;
console.log("After Multiplication =", marks);

marks /= 5;
console.log("After Division =", marks);

console.log("--------------------------------");

/*
===========================================
Expected Output

Initial Values
a = 10
b = 5

Assignment Operator (=)
x = 20

Before += : 10
After += : 15

Before -= : 10
After -= : 5

Before *= : 10
After *= : 50

Before /= : 10
After /= : 2

Before %= : 10
After %= : 1

Before **= : 5
After **= : 25

Initial Marks = 80
After Bonus = 90
After Deduction = 85
After Multiplication = 170
After Division = 34

===========================================
Summary

=    Assign value
+=   Add and assign
-=   Subtract and assign
*=   Multiply and assign
/=   Divide and assign
%=   Modulus and assign
**=  Exponentiation and assign

===========================================
*/