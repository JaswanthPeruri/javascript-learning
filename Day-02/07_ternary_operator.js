/*


The Ternary Operator is a shorthand for
the if...else statement.

Syntax:

condition ? expression1 : expression2;

===========================================
*/

let age = 20;

let result = age >= 18 ? "Eligible to Vote" : "Not Eligible";

console.log(result);

console.log("--------------------------------");

// Example 2

let number = 15;

let evenOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);

console.log("--------------------------------");

// Example 3

let marks = 80;

let grade = marks >= 35 ? "Pass" : "Fail";

console.log(grade);

console.log("--------------------------------");

/*
Expected Output

Eligible to Vote
-------------------------
Odd
-------------------------
Pass

===========================================
Summary

condition ? trueValue : falseValue;

Use the ternary operator when there are
only two possible outcomes.

===========================================
*/