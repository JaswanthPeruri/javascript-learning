/*

prompt() is used to take input
from the user.

Syntax:

prompt("Message");

===========================================
*/

// Example 1

let name = prompt("Enter your name:");

console.log("Name:", name);

console.log("--------------------------------");

// Example 2

let age = prompt("Enter your age:");

console.log("Age:", age);

console.log("--------------------------------");

// Example 3

let city = prompt("Enter your city:");

console.log("City:", city);

console.log("--------------------------------");

/*
===========================================
Notes

1. prompt() works only in browsers.

2. The value entered by the user is
   always returned as a String.

3. To convert it into a Number:

let num = Number(prompt("Enter Number"));

===========================================
*/