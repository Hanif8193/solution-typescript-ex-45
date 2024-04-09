"use strict";
//16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let friends = ["Hanif", "Faizan", "Ali zeeshan", "Maarij"];
let message = ("\nRespectable Sir/Madam\n I would like to invite you for dinner at my home,\n Thanks & Best regard");
// for (let i = 0; i < friends.length; i++) {
// console.log(friends[i] + message);
// }
let notPresent = "Ali zeeshan";
let new_friend = "Hoorub";
friends[2] = new_friend;
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i] + message);
}
console.log(`Mr, ${notPresent} will not coming at dinner`);
friends.unshift("tahirs", "Anum", "owaise");
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i] + message);
}
console.log(`Mr, ${notPresent} will not coming at dinner`);
