"use strict";
// 32.	Checking Usernames: Do the following to create a program that simulates 
// how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or 
// two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username
//  has already been used. If it has, print a message that the person will need to enter
//   a new username. If a username has not been used, print a message saying that 
//   the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used,
//  'JOHN' should not be accepted.
//array of current users
let current_users = ["Hanif", "Faizan", "Ali Zeeshan", "Maarij", "Hoorub"];
// array of new users
let new_users = ["Tahira", "Zara", "Anum", "Najma", "Hanif"];
//loop through new user to check the user name is avalibality
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_User => current_one_User.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`This username ${new_one_user} is already taken`);
    }
});
