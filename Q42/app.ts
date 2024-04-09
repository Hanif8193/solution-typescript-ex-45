// 42.	Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies the array of magicians by adding
//   the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// function to show magicians name
function show_magicians (magicians: string []){
magicians.forEach (name => console.log (name));
}
function make_great(magicians: string []){
   return magicians.map(name =>`The Great ${name}`);
}
// array of magicians name
let magicians_name= ["Hanif", "Faizan", 'Ali Zeeshan']

let great_magician = make_great(magicians_name);

// console.log (great_magician);

show_magicians(great_magician);
