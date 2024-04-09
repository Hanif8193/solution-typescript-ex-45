"use strict";
// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. 
//   Call the function three times,
//  using a different number of arguments each time.
// function with a rest parameter
function make_sandwitch(...items) {
    console.log("\nMaking a sandwitch with the following items:\n");
    items.forEach(singleItem => console.log(singleItem));
    console.log(" Now enjoy the sandwitch");
}
//call function 3 times with 3 different arguments
make_sandwitch("Beef", "salad", "egg", "mayo");
make_sandwitch("chicken", "bread", "kechup");
make_sandwitch("mayo", "butter", "cheez");
