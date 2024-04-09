"use strict";
// 17.	• Start with your program from Exercise 16. Add a new line that prints a message saying that Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let friends = ["Hanif", "Faizan", "Ali zeeshan", "Maarij"];
let message = ("\nRespectable Sir/Madam\n I would like to invite you for dinner at my home,\n Thanks & Best regard");
// for (let i = 0; i < friends.length; i++) {
// console.log(friends[i] + message);
// }
let notPresent = "Ali zeeshan";
let new_friend = "Hoorub";
friends[2] = new_friend;
// for (let i = 0; i < friends.length; i++) {
// console.log(friends[i] + message);
// }
// console.log(`Mr, ${notPresent} will not coming at dinner`);
friends.unshift("tahira", "Anum", "owaise");
//  for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i] + message);
// // }
// // console.log(`Mr, ${notPresent} will not coming at dinner`);
console.log('/unfortunatly some other surcumtanse dinner has been cancled only two friends can come');
while (friends.length > 2) {
    let remove_friends = friends.pop();
    console.log;
}
for (let i = 0; i < friends.length; i++)
    console.log(friends[i] + message);
// }
friends.splice(0, 2);
console.log(friends);
