"use strict";
// Seeing the World: Think of at least places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let countriesToVisit = ['india', "china", "brazil", 'danmark'];
console.log("orignal order", countriesToVisit);
// alphabatical order without changing array order,
console.log("alphabatical order:", [...countriesToVisit].sort());
//array in orignal order
console.log("still in orignal order", countriesToVisit);
//reverse order without modifing array order
console.log("reverse order", [...countriesToVisit].reverse());
//still in orignal order array
console.log("still in roignal order", countriesToVisit);
//change the array reversr order order
console.log("orignal array reverse", countriesToVisit.reverse());
//back to orignal array order
console.log("Back to orignal order", countriesToVisit.reverse());
// print the array in orignal order now
console.log("sorted in alphabatical order", countriesToVisit.sort());
//change the array reversr order order again
console.log("orignal array reverse", countriesToVisit.reverse());
