//Objective

// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, 
// followed by their full name and ending with the fullname length.

let fullname = prompt("Enter your full name without space")
console.log(`Name entered ${fullname}`);

let username = "@" + fullname + fullname.length
console.log(`Username is: ${username}`);