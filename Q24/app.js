"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests.
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality,
//  greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let banana = "banana";
let upperCasebanana = "BANANA";
let five = 5;
let ten = 10;
let friends = ["Hanif", "faizan", "Ali zeeshan"];
console.log("is banana is equal to banana?");
console.log(banana == "banana");
// inequiity test
console.log("\n is banana is not equal to banana?");
console.log(banana != "banana");
// lowerCase test
console.log("\nIs BANANA is equal to the banana after the conversion in to lowerCase ");
console.log(upperCasebanana.toLowerCase() == "banana");
console.log("\n is BANANA is not equal to the banana after the conversion in to lowerCase ");
console.log(upperCasebanana.toLowerCase() != "banana");
//numarical tests
//equal to
console.log("\n is five is equal to the ten?");
console.log(five == ten);
//not equal
console.log("\n is five is not equal to the ten?");
console.log(five != ten);
// lesser then
console.log("\n is five is lesser then ten");
console.log(5 < 10);
//greater then
console.log("\n is five is greater then ten");
console.log(5 > 10);
// greater then or equal to
console.log("is ten is greater then or equal to five");
console.log(10 >= 5);
// lesser then or equal to
console.log("is ten is lesser then or equal to five ");
console.log(10 <= 5);
// "and" & "or" oprators
// && "and"
console.log("\n is ten is not equal to five and ten is greater then five");
console.log(ten != 5 && ten > 5);
console.log("\n is ten is not equal to five and ten is greater then twenty");
console.log(ten != 5 && ten > 20);
// !! "or"
console.log("\n is ten is not equal to five or or ten is greater then twenty ");
console.log(ten != 5 || ten > 20);
console.log("\n is ten is  equal to five or or ten is greater then twenty ");
console.log(ten == 5 || ten > 20);
// items in a array
console.log("\n is Ali zeeshan includes in my friends array");
console.log(friends.includes("Ali zeeshan"));
// item is not in array
console.log("\n is Maarij includes in my friends array");
console.log(friends.includes("Maarij"));
