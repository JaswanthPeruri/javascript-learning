# Day 1 - JavaScript Basics

## 1. Introduction to JavaScript

JavaScript (JS) is a lightweight, interpreted, and dynamically typed programming language.

It is mainly used to make web pages interactive and dynamic.

JavaScript can:
- Display dynamic content.
- Handle user interactions.
- Perform calculations.
- Manipulate HTML and CSS.
- Communicate with servers.

JavaScript can be executed in:
- Web Browsers (Chrome, Edge, Firefox, etc.)
- Node.js Runtime Environment

---

## 2. Printing Output

JavaScript provides the `console.log()` method to display output in the browser console.

### Syntax

```javascript
console.log("Hello World");
```

### Example

```javascript
console.log("Welcome to JavaScript");
```

Output

```
Welcome to JavaScript
```

---

## 3. Variables

A variable is a named container used to store data.

Variables allow us to store values that can be used later in the program.

### Syntax

```javascript
let variableName = value;
```

### Example

```javascript
let name = "Jaswanth";
let age = 20;

console.log(name);
console.log(age);
```

---

## 4. Variable Declaration

A variable is declared before using it.

There are three ways to declare variables in JavaScript.

- var
- let
- const

---

## 5. Variable Naming Rules

Variable names:

- Can contain letters, digits, underscore (_) and dollar sign ($).
- Must begin with a letter, underscore (_) or dollar sign ($).
- Cannot begin with a number.
- Cannot contain spaces.
- Cannot use JavaScript reserved keywords.
- JavaScript is case-sensitive.

### Valid Variable Names

```javascript
let name;
let studentName;
let age1;
let _count;
let $price;
```

### Invalid Variable Names

```javascript
let 1name;
let student name;
let let;
```

---

## 6. var, let and const

### var

- Introduced before ES6.
- Can be redeclared.
- Can be reassigned.
- Function scoped.

Example

```javascript
var city = "Hyderabad";
city = "Vizag";

console.log(city);
```

---

### let

- Introduced in ES6 (2015).
- Cannot be redeclared in the same scope.
- Can be reassigned.
- Block scoped.

Example

```javascript
let age = 20;

age = 21;

console.log(age);
```

---

### const

- Introduced in ES6.
- Cannot be redeclared.
- Cannot be reassigned.
- Block scoped.
- Value remains constant.

Example

```javascript
const country = "India";

console.log(country);
```

---

## 7. Data Types

JavaScript data types are divided into two categories.

### Primitive Data Types

Primitive data types store a single value.

They are:

### Number

Represents both integers and decimal values.

Example

```javascript
let age = 20;
let price = 99.99;
```

---

### String

Represents textual data.

Example

```javascript
let name = "Jaswanth";
```

---

### Boolean

Represents logical values.

Possible values:

- true
- false

Example

```javascript
let isStudent = true;
```

---

### Undefined

A variable that has been declared but not assigned a value.

Example

```javascript
let x;

console.log(x);
```

Output

```
undefined
```

---

### Null

Represents an intentional absence of value.

Example

```javascript
let data = null;
```

---

### BigInt

Used to represent integers larger than the Number limit.

Example

```javascript
let bigNumber = 123456789012345678901234567890n;
```

---

### Symbol

Represents a unique identifier.

Example

```javascript
let id = Symbol("id");
```

---

## 8. Non-Primitive Data Type

### Object

Objects are collections of key-value pairs.

Example

```javascript
let student = {
    name: "Jaswanth",
    age: 20,
    branch: "CSE"
};

console.log(student);
```

---

## 9. typeof Operator

The `typeof` operator is used to determine the data type of a value.

Example

```javascript
console.log(typeof 25);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
```

Output

```
number
string
boolean
undefined
object
```

**Note:** `typeof null` returns `"object"`. This is a well-known behavior in JavaScript.

---

## 10. Dynamic Typing

JavaScript is a dynamically typed language.

This means a variable can store different types of values during execution.

Example

```javascript
let value = 25;

value = "JavaScript";

value = true;
```

---

## 11. Comments

Comments are used to explain code and improve readability.

JavaScript ignores comments during execution.

### Single-Line Comment

```javascript
// This is a single-line comment
```

### Multi-Line Comment

```javascript
/*
This is a
multi-line comment.
*/
```

---

# Day 1 Summary

Topics Covered:

- Introduction to JavaScript
- console.log()
- Variables
- Variable Declaration
- Variable Naming Rules
- var
- let
- const
- Primitive Data Types
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - BigInt
  - Symbol
- Non-Primitive Data Type
  - Object
- typeof Operator
- Dynamic Typing
- Comments

---