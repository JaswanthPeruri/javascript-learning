/*
==========================================
var, let and const
==========================================
*/

// var

var city = "Hyderabad";

console.log(city);

city = "Vizag";

console.log(city);

// var can be redeclared

var city = "Delhi";

console.log(city);


// let

let age = 20;

console.log(age);

age = 21;

console.log(age);

// let age = 25;   // Error


// const

const country = "India";

console.log(country);

// country = "USA";    // Error

/*
Summary

var
- Redeclare ✔
- Reassign ✔
- Function Scope

let
- Redeclare ✘
- Reassign ✔
- Block Scope

const
- Redeclare ✘
- Reassign ✘
- Block Scope
*/