// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
//  print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
let friendsName  = ["Hanif","Faizan","Ali Zeeshan","Naarij","Hoorub"];
let message = ("You are doing well, Keep it up")

for (let i=0; i<friendsName.length; i++){
    console.log ( message +friendsName [i]);
}