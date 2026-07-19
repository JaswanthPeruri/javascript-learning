/*

The switch statement is used when there
are multiple possible values.

Syntax:

switch(expression){
    case value:
        // code
        break;

    default:
        // code
}

===========================================
*/

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

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

console.log("--------------------------------");

// Example 2

let color = "red";

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Unknown Color");
}

/*
Expected Output

Wednesday
-------------------------
Stop

===========================================
Summary

switch
case
break
default

Always use break to stop execution of
the remaining cases.

===========================================
*/