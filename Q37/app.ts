// 37.	Large Shirts: Modify the make_shirt() function so that shirts are large by default
//  with a message that reads I love TypeScript. Make a large shirt and a medium shirt
//   with the default message,and a shirt of any size with a different message
function make_shirt(size: string = "large", printMessage: string = "I love Typescript"){
    console.log(`creating ${size} shirt with the ${printMessage} print on shirt`)
}
//call function
make_shirt ();
make_shirt ("Medium");

make_shirt("small","I love Python");