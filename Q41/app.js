"use strict";
// 41.	Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
//array with name of Magacian 
function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
// contain array with magician name
let magician_name = ["Hanif", "Faiza", "Ali Zeeshan"];
//call the function
show_magicians(magician_name);
