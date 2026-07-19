/*


Conditional statements are used to execute
different blocks of code based on a condition.

Conditional Statements:
1. if
2. if...else
3. if...else if...else
4. Nested if

===========================================
*/

/*
===========================================
1. if Statement

The if statement executes a block of code
only when the condition is true.

Syntax:

if (condition) {
    // code
}

===========================================
*/

let age = 20;

console.log("Example of if Statement");

if (age >= 18) {
    console.log("You are eligible to vote.");
}

console.log("--------------------------------");

/*
Expected Output

Example of if Statement
You are eligible to vote.
*/




/*
===========================================
2. if...else Statement

Executes one block if the condition is true,
otherwise executes another block.

Syntax:

if (condition) {
    // code
}
else {
    // code
}

===========================================
*/

let marks = 35;

console.log("Example of if...else Statement");

if (marks >= 35) {
    console.log("You Passed.");
} else {
    console.log("You Failed.");
}

console.log("--------------------------------");

/*
Expected Output

Example of if...else Statement
You Passed.
*/




/*
===========================================
3. if...else if...else Statement

Used when there are multiple conditions.

Syntax:

if (condition1) {
    // code
}
else if (condition2) {
    // code
}
else {
    // code
}

===========================================
*/

let score = 82;

console.log("Example of if...else if...else");

if (score >= 90) {
    console.log("Grade A");
}
else if (score >= 75) {
    console.log("Grade B");
}
else if (score >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

console.log("--------------------------------");

/*
Expected Output

Example of if...else if...else
Grade B
*/




/*
===========================================
4. Nested if Statement

An if statement inside another if statement
is called a Nested if.

===========================================
*/

let userAge = 22;
let hasLicense = true;

console.log("Example of Nested if");

if (userAge >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("You need a driving license.");
    }
} else {
    console.log("You are not eligible to drive.");
}

console.log("--------------------------------");

/*
Expected Output

Example of Nested if
You can drive.
*/




/*
===========================================
Real-Time Example 1

Check Even or Odd Number
===========================================
*/

let number = 15;

console.log("Even or Odd");

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}

console.log("--------------------------------");




/*
===========================================
Real-Time Example 2

Login Verification
===========================================
*/

let username = "admin";
let password = "1234";

console.log("Login Verification");

if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

console.log("--------------------------------");




/*
===========================================
Real-Time Example 3

Voting Eligibility
===========================================
*/

let personAge = 17;

console.log("Voting Eligibility");

if (personAge >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

console.log("--------------------------------");




/*
===========================================
Expected Output

Example of if Statement
You are eligible to vote.

--------------------------------

Example of if...else Statement
You Passed.

--------------------------------

Example of if...else if...else
Grade B

--------------------------------

Example of Nested if
You can drive.

--------------------------------

Even or Odd
15 is Odd

--------------------------------

Login Verification
Login Successful

--------------------------------

Voting Eligibility
Not Eligible to Vote

===========================================
Summary

if
→ Executes a block only if the condition is true.

if...else
→ Executes one block if true,
  another block if false.

if...else if...else
→ Used to check multiple conditions.

Nested if
→ An if statement inside another if statement.

===========================================
*/