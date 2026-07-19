# Day 02 - JavaScript Operators

## Topics Covered

1. Arithmetic Operators
2. Assignment Operators

---

# 1. Arithmetic Operators

Arithmetic operators are used to perform mathematical operations on numbers.

## Operators

| Operator | Description |
|----------|-------------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus (Remainder) |
| ** | Exponentiation (Power) |
| ++ | Increment |
| -- | Decrement |

---

## Addition (+)

Used to add two values.

### Syntax

```javascript
a + b
```

### Example

```javascript
let a = 10;
let b = 5;

console.log(a + b);
```

**Output**

```
15
```

---

## Subtraction (-)

Used to subtract one value from another.

### Syntax

```javascript
a - b
```

### Example

```javascript
let a = 10;
let b = 5;

console.log(a - b);
```

**Output**

```
5
```

---

## Multiplication (*)

Used to multiply two values.

### Syntax

```javascript
a * b
```

### Example

```javascript
let a = 10;
let b = 5;

console.log(a * b);
```

**Output**

```
50
```

---

## Division (/)

Used to divide one value by another.

### Syntax

```javascript
a / b
```

### Example

```javascript
let a = 10;
let b = 5;

console.log(a / b);
```

**Output**

```
2
```

---

## Modulus (%)

Returns the remainder after division.

### Syntax

```javascript
a % b
```

### Example

```javascript
let a = 10;
let b = 3;

console.log(a % b);
```

**Output**

```
1
```

---

## Exponentiation (**)

Returns the value of a number raised to a power.

### Syntax

```javascript
a ** b
```

### Example

```javascript
let a = 5;

console.log(a ** 2);
```

**Output**

```
25
```

---

## Increment (++)

Increases the value of a variable by **1**.

### Pre Increment

```javascript
let x = 10;

console.log(++x);
```

**Output**

```
11
```

### Post Increment

```javascript
let x = 10;

console.log(x++);
console.log(x);
```

**Output**

```
10
11
```

---

## Decrement (--)

Decreases the value of a variable by **1**.

### Pre Decrement

```javascript
let x = 10;

console.log(--x);
```

**Output**

```
9
```

### Post Decrement

```javascript
let x = 10;

console.log(x--);
console.log(x);
```

**Output**

```
10
9
```

---

# 2. Assignment Operators

Assignment operators are used to assign values to variables.

## Operators

| Operator | Description |
|----------|-------------|
| = | Assignment |
| += | Add and Assign |
| -= | Subtract and Assign |
| *= | Multiply and Assign |
| /= | Divide and Assign |
| %= | Modulus and Assign |
| **= | Exponentiation and Assign |

---

## Assignment (=)

Assigns a value to a variable.

### Example

```javascript
let x = 10;
```

---

## Addition Assignment (+=)

### Syntax

```javascript
a += b;
```

Equivalent to

```javascript
a = a + b;
```

### Example

```javascript
let a = 10;

a += 5;

console.log(a);
```

**Output**

```
15
```

---

## Subtraction Assignment (-=)

### Syntax

```javascript
a -= b;
```

Equivalent to

```javascript
a = a - b;
```

### Example

```javascript
let a = 10;

a -= 5;

console.log(a);
```

**Output**

```
5
```

---

## Multiplication Assignment (*=)

### Syntax

```javascript
a *= b;
```

Equivalent to

```javascript
a = a * b;
```

### Example

```javascript
let a = 10;

a *= 5;

console.log(a);
```

**Output**

```
50
```

---

## Division Assignment (/=)

### Syntax

```javascript
a /= b;
```

Equivalent to

```javascript
a = a / b;
```

### Example

```javascript
let a = 10;

a /= 5;

console.log(a);
```

**Output**

```
2
```

---

## Modulus Assignment (%=)

### Syntax

```javascript
a %= b;
```

Equivalent to

```javascript
a = a % b;
```

### Example

```javascript
let a = 10;

a %= 3;

console.log(a);
```

**Output**

```
1
```

---

## Exponentiation Assignment (**=)

### Syntax

```javascript
a **= b;
```

Equivalent to

```javascript
a = a ** b;
```

### Example

```javascript
let a = 5;

a **= 2;

console.log(a);
```

**Output**

```
25
```

# 3. Comparison Operators

Comparison operators are used to compare two values.

The result of a comparison is always:

- true
- false

## Operators

| Operator | Description |
|----------|-------------|
| > | Greater Than |
| < | Less Than |
| >= | Greater Than or Equal To |
| <= | Less Than or Equal To |

---

## Greater Than (>)

Checks whether the left value is greater than the right value.

### Syntax

```javascript
a > b
```

### Example

```javascript
let a = 10;
let b = 5;

console.log(a > b);
```

**Output**

```
true
```

---

## Less Than (<)

Checks whether the left value is less than the right value.

### Syntax

```javascript
a < b
```

### Example

```javascript
let a = 10;
let b = 5;

console.log(a < b);
```

**Output**

```
false
```

---

## Greater Than or Equal To (>=)

Returns true if the left value is greater than or equal to the right value.

### Syntax

```javascript
a >= b
```

### Example

```javascript
let a = 10;
let b = 10;

console.log(a >= b);
```

**Output**

```
true
```

---

## Less Than or Equal To (<=)

Returns true if the left value is less than or equal to the right value.

### Syntax

```javascript
a <= b
```

### Example

```javascript
let a = 5;
let b = 10;

console.log(a <= b);
```

**Output**

```
true
```

---

# 4. Equality Operators

Equality operators are used to compare two values.

## Operators

| Operator | Description |
|----------|-------------|
| == | Equal To |
| === | Strict Equal To |
| != | Not Equal To |
| !== | Strict Not Equal To |

---

## Equal To (==)

Compares only the values.

### Syntax

```javascript
a == b
```

### Example

```javascript
console.log(10 == "10");
```

**Output**

```
true
```

---

## Strict Equal To (===)

Compares both the value and the data type.

### Syntax

```javascript
a === b
```

### Example

```javascript
console.log(10 === "10");
```

**Output**

```
false
```

---

## Not Equal To (!=)

Checks whether two values are not equal.

### Syntax

```javascript
a != b
```

### Example

```javascript
console.log(10 != 5);
```

**Output**

```
true
```

---

## Strict Not Equal To (!==)

Checks both the value and the data type.

### Syntax

```javascript
a !== b
```

### Example

```javascript
console.log(10 !== "10");
```

**Output**

```
true
```

---

# Difference Between == and ===

| == | === |
|----|-----|
| Compares only values | Compares value and data type |
| Performs type conversion | Does not perform type conversion |

### Example

```javascript
console.log(10 == "10");
console.log(10 === "10");
```

**Output**

```
true
false
```

---

# 5. Logical Operators

Logical operators are used to combine multiple conditions.

## Operators

| Operator | Description |
|----------|-------------|
| && | Logical AND |
| \|\| | Logical OR |
| ! | Logical NOT |

---

## Logical AND (&&)

Returns true only when both conditions are true.

### Syntax

```javascript
condition1 && condition2
```

### Example

```javascript
let age = 20;

console.log(age >= 18 && age <= 60);
```

**Output**

```
true
```

---

## Logical OR (||)

Returns true if at least one condition is true.

### Syntax

```javascript
condition1 || condition2
```

### Example

```javascript
let age = 16;

console.log(age >= 18 || age >= 15);
```

**Output**

```
true
```

---

## Logical NOT (!)

Reverses the Boolean value.

### Syntax

```javascript
!condition
```

### Example

```javascript
let isLoggedIn = true;

console.log(!isLoggedIn);
```

**Output**

```
false
```

# 6. Conditional Statements

Conditional statements are used to execute different blocks of code based on a condition.

## Types of Conditional Statements

- if
- if...else
- if...else if...else

---

## if Statement

The `if` statement executes a block of code only when the condition is **true**.

### Syntax

```javascript
if (condition) {
    // code
}
```

### Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
}
```

**Output**

```
Eligible to Vote
```

---

## if...else Statement

If the condition is **true**, the `if` block executes.
Otherwise, the `else` block executes.

### Syntax

```javascript
if (condition) {
    // code
}
else {
    // code
}
```

### Example

```javascript
let age = 16;

if (age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible");
}
```

**Output**

```
Not Eligible
```

---

## if...else if...else Statement

Used when there are multiple conditions.

### Syntax

```javascript
if (condition1) {

}
else if (condition2) {

}
else {

}
```

### Example

```javascript
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 35) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
```

**Output**

```
Grade B
```

---

# 7. Ternary Operator

The Ternary Operator is the shorthand form of the `if...else` statement.

### Syntax

```javascript
condition ? expression1 : expression2;
```

### Example 1

```javascript
let age = 20;

let result = age >= 18 ? "Eligible to Vote" : "Not Eligible";

console.log(result);
```

**Output**

```
Eligible to Vote
```

---

### Example 2

```javascript
let number = 15;

let result = number % 2 == 0 ? "Even" : "Odd";

console.log(result);
```

**Output**

```
Odd
```

---

### Example 3

```javascript
let marks = 80;

let result = marks >= 35 ? "Pass" : "Fail";

console.log(result);
```

**Output**

```
Pass
```

# 8. Switch Statement

The `switch` statement is used to execute one block of code from multiple options based on the value of an expression.

## Syntax

```javascript
switch (expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // code
}
```

---

## Example

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

**Output**

```
Wednesday
```

---

## break Keyword

The `break` statement stops the execution of the switch statement.

Without `break`, the execution continues to the next case.

---

## default

The `default` block executes when none of the cases match.

---

# 9. alert()

The `alert()` function is used to display a popup message in the browser.

## Syntax

```javascript
alert("Message");
```

### Example

```javascript
alert("Welcome to JavaScript");
```

A popup message is displayed with an **OK** button.

---

# 10. prompt()

The `prompt()` function is used to get input from the user.

## Syntax

```javascript
prompt("Message");
```

### Example

```javascript
let name = prompt("Enter your name");

console.log(name);
```

If the user enters

```
Jaswanth
```

**Output**

```
Jaswanth
```

---

# MDN Documentation

MDN (Mozilla Developer Network) is the official documentation for JavaScript.

It contains:

- JavaScript
- HTML
- CSS
- Web APIs

Website:

https://developer.mozilla.org/

---
