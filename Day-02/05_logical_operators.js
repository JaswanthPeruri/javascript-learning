/*


Logical operators are used to combine
or invert Boolean expressions.

They always return:
- true
- false

Logical Operators:
1. && (Logical AND)
2. || (Logical OR)
3. !  (Logical NOT)

===========================================
*/

/*
===========================================
1. Logical AND (&&)

Returns true only if BOTH conditions
are true.

Syntax:

condition1 && condition2

Truth Table

true  && true  -> true
true  && false -> false
false && true  -> false
false && false -> false

===========================================
*/

let age = 20;
let hasLicense = true;

console.log("Logical AND (&&)");

console.log(age >= 18 && hasLicense);
console.log(age >= 18 && false);
console.log(false && true);

console.log("--------------------------------");

/*
Expected Output

true
false
false
*/




/*
===========================================
2. Logical OR (||)

Returns true if AT LEAST ONE condition
is true.

Syntax:

condition1 || condition2

Truth Table

true  || true  -> true
true  || false -> true
false || true  -> true
false || false -> false

===========================================
*/

let isStudent = false;
let hasCoupon = true;

console.log("Logical OR (||)");

console.log(isStudent || hasCoupon);
console.log(false || false);
console.log(true || false);

console.log("--------------------------------");

/*
Expected Output

true
false
true
*/




/*
===========================================
3. Logical NOT (!)

Reverses the Boolean value.

true becomes false.
false becomes true.

Syntax:

!condition

===========================================
*/

let isLoggedIn = true;

console.log("Logical NOT (!)");

console.log(!isLoggedIn);
console.log(!false);
console.log(!true);

console.log("--------------------------------");

/*
Expected Output

false
true
false
*/




/*
===========================================
Real-Time Example 1

Voting Eligibility
===========================================
*/

let personAge = 22;
let citizen = true;

console.log("Can Vote:");

console.log(personAge >= 18 && citizen);

console.log("--------------------------------");




/*
===========================================
Real-Time Example 2

Discount Eligibility
===========================================
*/

let premiumMember = false;
let festivalOffer = true;

console.log("Discount Available:");

console.log(premiumMember || festivalOffer);

console.log("--------------------------------");




/*
===========================================
Real-Time Example 3

Login Status
===========================================
*/

let loggedIn = false;

console.log("Is User Logged Out?");

console.log(!loggedIn);

console.log("--------------------------------");




/*
===========================================
Combining Logical Operators
===========================================
*/

let marks = 85;
let attendance = 90;

console.log("Eligible for Certificate:");

console.log(marks >= 80 && attendance >= 75);

console.log("--------------------------------");




/*
===========================================
Expected Output

Logical AND (&&)

true
false
false

--------------------------------

Logical OR (||)

true
false
true

--------------------------------

Logical NOT (!)

false
true
false

--------------------------------

Can Vote:
true

--------------------------------

Discount Available:
true

--------------------------------

Is User Logged Out?
true

--------------------------------

Eligible for Certificate:
true

===========================================
Summary

&&  Logical AND
    Returns true only if both
    conditions are true.

||  Logical OR
    Returns true if at least one
    condition is true.

!   Logical NOT
    Reverses the Boolean value.

Examples

true && true   -> true
true && false  -> false

true || false  -> true
false || false -> false

!true  -> false
!false -> true

===========================================
*/