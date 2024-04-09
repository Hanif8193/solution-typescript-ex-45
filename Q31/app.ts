// 31.	No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userName = ["Hanif", "Faizan", "Ali Zeeshan", "Admin", "Maarij"];
userName = [];
 if (userName.length === 0){
console.log ("array is empty, We need to find some user! ")
 }
 else {
   userName.forEach(oneUser => {
      if (oneUser === "Admin"){
      console.log (`Hello ${oneUser}, would you like to see a status report`); 
  }
  else {
      console.log ( `hello ${oneUser}, thank you for logging in again.`)
  }
  })
 }