/*


Comparison operators are used to compare
two values.

They always return a Boolean value:
- true
- false

Operators:
1. >
2. <
3. >=
4. <=
5. ==
6. !=

===========================================
*/

// Declaring Variables
let a = 10;
let b = 5;

console.log("a =", a);
console.log("b =", b);

console.log("--------------------------------");

/*
===========================================
1. Greater Than (>)
Checks whether the left value is
greater than the right value.
===========================================
*/

console.log("Greater Than (>)");
console.log("a > b =", a > b);
console.log("b > a =", b > a);

console.log("--------------------------------");

/*
===========================================
2. Less Than (<)
Checks whether the left value is
less than the right value.
===========================================
*/

console.log("Less Than (<)");
console.log("a < b =", a < b);
console.log("b < a =", b < a);

console.log("--------------------------------");

/*
===========================================
3. Greater Than or Equal To (>=)
Returns true if the left value is
greater than or equal to the right value.
===========================================
*/

console.log("Greater Than or Equal To (>=)");
console.log("a >= b =", a >= b);
console.log("a >= 10 =", a >= 10);

console.log("--------------------------------");

/*
===========================================
4. Less Than or Equal To (<=)
Returns true if the left value is
less than or equal to the right value.
===========================================
*/

console.log("Less Than or Equal To (<=)");
console.log("a <= b =", a <= b);
console.log("b <= 5 =", b <= 5);

console.log("--------------------------------");

/*
===========================================
5. Equal To (==)
Checks only the values.

It performs type conversion before
making the comparison.
===========================================
*/

console.log("Equal To (==)");
console.log("10 == 10 =", 10 == 10);
console.log("10 == '10' =", 10 == "10");
console.log("5 == 10 =", 5 == 10);

console.log("--------------------------------");

/*
===========================================
6. Not Equal To (!=)
Checks whether two values are
not equal.

It also performs type conversion.
===========================================
*/

console.log("Not Equal To (!=)");
console.log("10 != 5 =", 10 != 5);
console.log("10 != '10' =", 10 != "10");
console.log("5 != 5 =", 5 != 5);

console.log("--------------------------------");

/*
===========================================
Real-Time Example
===========================================
*/

let age = 20;

console.log("Age =", age);

console.log("Eligible to Vote:", age >= 18);
console.log("Minor:", age < 18);

console.log("--------------------------------");

/*
===========================================
Expected Output

a = 10
b = 5

Greater Than (>)
a > b = true
b > a = false

Less Than (<)
a < b = false
b < a = true

Greater Than or Equal To (>=)
a >= b = true
a >= 10 = true

Less Than or Equal To (<=)
a <= b = false
b <= 5 = true

Equal To (==)
10 == 10 = true
10 == "10" = true
5 == 10 = false

Not Equal To (!=)
10 != 5 = true
10 != "10" = false
5 != 5 = false

Age = 20
Eligible to Vote: true
Minor: false

===========================================
Summary

>   Greater Than
<   Less Than
>=  Greater Than or Equal To
<=  Less Than or Equal To
==  Equal To (Loose Equality)
!=  Not Equal To

Note:
== and != perform type conversion.
Strict equality (===) and strict
inequality (!==) are covered in the
next file.

===========================================
*/