# Day 1 - JavaScript Basics

## 1. Introduction to JavaScript

JavaScript (JS) is a **lightweight**, **interpreted**, and **dynamically typed** programming language.

It is one of the core technologies of web development along with **HTML** and **CSS**.

- **HTML** is used to create the structure of a web page.
- **CSS** is used to style the web page.
- **JavaScript** is used to add functionality and interactivity.

JavaScript can:

- Display dynamic content.
- Handle user interactions.
- Validate forms.
- Perform calculations.
- Manipulate HTML and CSS.
- Communicate with servers using APIs.

### Where JavaScript Runs

JavaScript can run in:

- Web Browsers (Chrome, Firefox, Edge, Safari)
- Node.js Runtime Environment

---

## 2. Printing Output

JavaScript provides the `console.log()` method to display output.

It is mainly used for:

- Displaying messages.
- Printing variable values.
- Debugging programs.
- Checking program execution.

### Syntax

```javascript
console.log(value);
```

or

```javascript
console.log("Hello World");
```

### Example 1

```javascript
console.log("Welcome to JavaScript");
```

**Output**

```
Welcome to JavaScript
```

### Example 2

```javascript
console.log(100);
```

**Output**

```
100
```

### Example 3

```javascript
let name = "Jaswanth";

console.log(name);
```

**Output**

```
Jaswanth
```

### Example 4

```javascript
let name = "Jaswanth";
let age = 20;

console.log(name, age);
```

**Output**

```
Jaswanth 20
```

> **Note:** The output of `console.log()` is displayed in the browser's Developer Console (F12 → Console).

---

## 3. Variables

### What is a Variable?

A variable is a named container used to store data in memory.

Variables allow us to store values that can be used later in the program.

Instead of writing the same value multiple times, we store it in a variable and reuse it whenever needed.

### Why Do We Need Variables?

Variables help us to:

- Store data.
- Reuse values.
- Write cleaner code.
- Improve readability.
- Modify values easily.

### Syntax

```javascript
let variableName = value;
```

### General Syntax

```javascript
keyword variableName = value;
```

Where:

- **keyword** → `var`, `let`, or `const`
- **variableName** → Name of the variable.
- **value** → Data stored in the variable.

### Example

```javascript
let name = "Jaswanth";
let age = 20;

console.log(name);
console.log(age);
```

**Output**

```
Jaswanth
20
```

### Another Example

```javascript
let city = "Hyderabad";
let state = "Telangana";

console.log(city);
console.log(state);
```

**Output**

```
Hyderabad
Telangana
```

---

## 4. Variable Declaration

### What is Variable Declaration?

Before a variable can be used in a JavaScript program, it must first be **declared**.

Declaring a variable tells the JavaScript engine to create a memory location where data can be stored.

A variable can be:

- Declared first.
- Assigned a value later.
- Or declared and initialized at the same time.

---

### Declaration

Creating a variable without assigning any value.

```javascript
let name;
```

Since no value is assigned, JavaScript automatically stores the value:

```javascript
undefined
```

Example

```javascript
let name;

console.log(name);
```

**Output**

```
undefined
```

---

### Initialization

Assigning a value to an already declared variable.

```javascript
let name;

name = "Jaswanth";
```

Example

```javascript
let name;

name = "Jaswanth";

console.log(name);
```

**Output**

```
Jaswanth
```

---

### Declaration and Initialization Together

This is the most commonly used method.

```javascript
let age = 20;
```

Here,

- `let` → keyword
- `age` → variable name
- `20` → value

---

### Syntax

Only Declaration

```javascript
keyword variableName;
```

Example

```javascript
let name;
```

Declaration and Initialization

```javascript
keyword variableName = value;
```

Example

```javascript
let age = 20;
```

---

### Declaring Multiple Variables

```javascript
let firstName = "Jaswanth";
let lastName = "Peruri";
let age = 20;
```

```javascript
console.log(firstName);
console.log(lastName);
console.log(age);
```

**Output**

```
Jaswanth
Peruri
20
```

---

## Ways to Declare Variables

JavaScript provides **three keywords** to declare variables.

- `var`
- `let`
- `const`

Each keyword behaves differently in terms of:

- Scope
- Redeclaration
- Reassignment
- Hoisting

These differences are explained in the next section (`var`, `let`, and `const`).

> **Note:** In modern JavaScript (ES6 and later), `let` and `const` are recommended over `var`.
## 5. Variable Naming Rules

Choosing meaningful variable names makes your code easier to read and understand.

JavaScript has some rules that every variable name must follow.

### Rules for Naming Variables

1. A variable name can contain:
   - Letters (A-Z, a-z)
   - Digits (0-9)
   - Underscore (_)
   - Dollar sign ($)

2. A variable name must begin with:
   - A letter
   - An underscore (_)
   - A dollar sign ($)

3. A variable name **cannot** begin with a number.

4. A variable name **cannot** contain spaces.

5. Reserved JavaScript keywords cannot be used as variable names.

6. JavaScript variable names are **case-sensitive**.

Example:

```javascript
let name = "Jaswanth";
let Name = "JavaScript";

console.log(name);
console.log(Name);
```

Output

```
Jaswanth
JavaScript
```

Here, `name` and `Name` are two different variables.

---

### Valid Variable Names

```javascript
let name;
let studentName;
let age1;
let _count;
let $price;
let first_name;
let totalMarks;
```

---

### Invalid Variable Names

```javascript
let 1name;
let student name;
let let;
let @price;
let first-name;
```

Why are these invalid?

- `1name` → Starts with a number.
- `student name` → Contains a space.
- `let` → Reserved keyword.
- `@price` → '@' is not allowed.
- `first-name` → '-' is treated as the subtraction operator.

---

### Best Practices for Naming Variables

- Use meaningful names.
- Use camelCase naming convention.
- Avoid single-letter names unless required.
- Keep names short but descriptive.

Good Examples

```javascript
let firstName;
let totalMarks;
let studentAge;
let isLoggedIn;
```

Bad Examples

```javascript
let a;
let x;
let abc;
```

---

## 6. var, let and const

JavaScript provides three keywords to declare variables.

- `var`
- `let`
- `const`

Although all three are used to declare variables, their behavior is different.

---

## var

`var` was introduced in the earlier versions of JavaScript (before ES6).

### Features of var

- Can be redeclared.
- Can be reassigned.
- Function scoped.
- Hoisted with an initial value of `undefined`.

### Syntax

```javascript
var variableName = value;
```

### Example

```javascript
var city = "Hyderabad";

console.log(city);
```

Output

```
Hyderabad
```

---

### Redeclaration using var

A variable declared with `var` can be declared again.

```javascript
var city = "Hyderabad";
var city = "Vizag";

console.log(city);
```

Output

```
Vizag
```

---

### Reassignment using var

```javascript
var age = 20;

age = 21;

console.log(age);
```

Output

```
21
```

---

## let

`let` was introduced in **ES6 (ECMAScript 2015)**.

It is the most commonly used keyword in modern JavaScript.

### Features of let

- Cannot be redeclared in the same scope.
- Can be reassigned.
- Block scoped.

### Syntax

```javascript
let variableName = value;
```

### Example

```javascript
let age = 20;

console.log(age);
```

Output

```
20
```

---

### Redeclaration using let

```javascript
let age = 20;

let age = 25;
```

Output

```
SyntaxError
```

Reason:

A variable declared using `let` cannot be declared again in the same scope.

---

### Reassignment using let

```javascript
let age = 20;

age = 21;

console.log(age);
```

Output

```
21
```

---

## const

`const` was also introduced in **ES6 (ECMAScript 2015)**.

It is used to declare variables whose values should not change.

### Features of const

- Cannot be redeclared.
- Cannot be reassigned.
- Block scoped.
- Must be initialized during declaration.

### Syntax

```javascript
const variableName = value;
```

### Example

```javascript
const country = "India";

console.log(country);
```

Output

```
India
```

---

### Reassignment using const

```javascript
const country = "India";

country = "USA";
```

Output

```
TypeError
```

Reason:

A constant variable cannot be assigned a new value.

---

### Declaration without Initialization

```javascript
const PI;
```

Output

```
SyntaxError: Missing initializer in const declaration
```

Reason:

A `const` variable must be assigned a value when it is declared.

---

## Difference Between var, let and const

| Feature | var | let | const |
|---------|-----|-----|-------|
| Introduced | Before ES6 | ES6 (2015) | ES6 (2015) |
| Redeclaration | ✅ Yes | ❌ No | ❌ No |
| Reassignment | ✅ Yes | ✅ Yes | ❌ No |
| Scope | Function Scope | Block Scope | Block Scope |
| Hoisting | Yes | Yes (Temporal Dead Zone) | Yes (Temporal Dead Zone) |
| Initialization Required | No | No | Yes |

---

## When Should You Use Them?

### Use `let`

When the value may change.

Example

```javascript
let score = 10;

score = 20;
```

---

### Use `const`

When the value should remain constant.

Example

```javascript
const PI = 3.14159;
```

---

### Avoid `var`

Although `var` still works, it is generally avoided in modern JavaScript because of its function scope and hoisting behavior.

---

## Best Practice

In modern JavaScript:

- Use **const** by default.
- Use **let** when the value needs to change.
- Avoid **var** unless working with older JavaScript code.

---

## 7. Data Types

A **data type** specifies the type of value that a variable can store.

JavaScript is a **dynamically typed language**, which means you do not need to specify the data type while declaring a variable. JavaScript automatically determines the data type based on the assigned value.

Example

```javascript
let age = 20;
let name = "Jaswanth";
let isStudent = true;
```

JavaScript data types are divided into two categories:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types

---

## Primitive Data Types

Primitive data types store a **single value** and are immutable (their values cannot be changed directly).

JavaScript has **7 Primitive Data Types**.

- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

---

## 1. Number

The **Number** data type is used to store both integer and floating-point (decimal) values.

Examples

```javascript
let age = 20;
let marks = 95;
let price = 99.99;

console.log(age);
console.log(price);
```

Output

```
20
99.99
```

---

## 2. String

A **String** is used to store textual data.

Strings can be enclosed in:

- Double quotes (" ")
- Single quotes (' ')
- Backticks (` `)

Example

```javascript
let name = "Jaswanth";
let city = 'Hyderabad';

console.log(name);
console.log(city);
```

Output

```
Jaswanth
Hyderabad
```

---

## 3. Boolean

A **Boolean** stores only two values.

- true
- false

It is mainly used in decision-making statements.

Example

```javascript
let isStudent = true;
let hasJob = false;

console.log(isStudent);
console.log(hasJob);
```

Output

```
true
false
```

---

## 4. Undefined

When a variable is declared but **not assigned a value**, JavaScript automatically assigns the value `undefined`.

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

## 5. Null

`null` represents the **intentional absence of a value**.

Unlike `undefined`, the programmer explicitly assigns `null`.

Example

```javascript
let data = null;

console.log(data);
```

Output

```
null
```

---

## Difference Between Undefined and Null

| Undefined | Null |
|------------|------|
| Automatically assigned by JavaScript | Assigned by the programmer |
| Variable declared but not initialized | Variable intentionally contains no value |

Example

```javascript
let x;
let y = null;

console.log(x);
console.log(y);
```

Output

```
undefined
null
```

---

## 6. BigInt

The **BigInt** data type is used to store very large integers that cannot be represented accurately using the Number data type.

A BigInt value ends with **n**.

Example

```javascript
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
```

Output

```
123456789012345678901234567890n
```

---

## 7. Symbol

A **Symbol** represents a unique value.

Even if two symbols have the same description, they are always different.

Example

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);
```

Output

```
false
```

---

## 8. Non-Primitive Data Types

Unlike primitive data types, non-primitive data types can store multiple values.

The most commonly used non-primitive data type is **Object**.

---

## Object

An **Object** is a collection of **key-value pairs**.

Syntax

```javascript
let objectName = {
    key1: value1,
    key2: value2
};
```

Example

```javascript
let student = {
    name: "Jaswanth",
    age: 20,
    branch: "CSE"
};

console.log(student);
```

Output

```
{
  name: "Jaswanth",
  age: 20,
  branch: "CSE"
}
```

### Accessing Object Properties

You can access object properties using the dot (`.`) operator.

Example

```javascript
let student = {
    name: "Jaswanth",
    age: 20
};

console.log(student.name);
console.log(student.age);
```

Output

```
Jaswanth
20
```

---

## 9. typeof Operator

The **typeof** operator is used to determine the data type of a variable or value.

Syntax

```javascript
typeof variableName
```

or

```javascript
typeof(value)
```

Example

```javascript
console.log(typeof 25);
console.log(typeof "JavaScript");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 123n);
console.log(typeof Symbol("id"));
```

Output

```
number
string
boolean
undefined
object
bigint
symbol
```

> **Note:** `typeof null` returns `"object"`. This is a well-known behavior (historical bug) in JavaScript.

---

## Primitive vs Non-Primitive Data Types

| Primitive Data Types | Non-Primitive Data Types |
|----------------------|--------------------------|
| Store a single value | Store multiple values |
| Immutable | Mutable |
| Compared by value | Compared by reference |
| Examples: Number, String, Boolean | Examples: Object, Array, Function |

---

## 10. Dynamic Typing

JavaScript is a **dynamically typed** programming language.

This means you **do not need to declare the data type** of a variable explicitly. JavaScript automatically determines the data type based on the value assigned to the variable.

A variable can store different types of values during program execution.

### Example 1

```javascript
let value = 25;

console.log(value);
```

Output

```
25
```

Here, `value` is of type **Number**.

---

### Example 2

```javascript
let value = 25;

value = "JavaScript";

console.log(value);
```

Output

```
JavaScript
```

Now, the same variable stores a **String**.

---

### Example 3

```javascript
let value = 25;

value = "JavaScript";

value = true;

console.log(value);
```

Output

```
true
```

The same variable has stored:

- Number
- String
- Boolean

This demonstrates the **dynamic typing** feature of JavaScript.

---

### Advantages of Dynamic Typing

- Easy to write code.
- Less code compared to statically typed languages.
- Flexible while developing applications.

---

### Disadvantages of Dynamic Typing

- Type-related bugs may occur.
- Errors are detected during runtime.
- Makes debugging difficult in large applications.

---

## 11. Comments

Comments are used to explain the code.

They improve the readability and maintainability of programs.

JavaScript ignores comments during execution.

Comments are mainly used for:

- Explaining code.
- Making programs easier to understand.
- Temporarily disabling code during testing.
- Adding notes for developers.

---

## Single-Line Comment

A single-line comment starts with `//`.

Everything after `//` on that line is treated as a comment.

### Syntax

```javascript
// This is a comment
```

### Example

```javascript
// Printing a message

console.log("Hello JavaScript");
```

Output

```
Hello JavaScript
```

---

## Multi-Line Comment

A multi-line comment starts with `/*` and ends with `*/`.

It is used to write comments spanning multiple lines.

### Syntax

```javascript
/*
This is
a multi-line
comment.
*/
```

### Example

```javascript
/*
Program to print
student details
*/

console.log("Jaswanth");
console.log(20);
```

Output

```
Jaswanth
20
```

---

## Why Use Comments?

Comments help to:

- Improve code readability.
- Explain complex logic.
- Make code easier to maintain.
- Help other developers understand the program.

---
