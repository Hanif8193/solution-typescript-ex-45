// 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let friends = ["Hanif", "Faizan", "Ali zeeshan", "Maarij"];
let message = ("\nRespectable Sir/Madam\n I would like to invite you for dinner at my home,\n Thanks & Best regard");
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i] + message);
}
let notPresent : string = "Ali zeeshan";
let new_friend : string = "Hoorub";
friends[2] = new_friend ;
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i] + message);
}
console.log (`Mr, ${notPresent} will not coming at dinner` );