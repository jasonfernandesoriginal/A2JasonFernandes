
//Variable definition
let name = prompt("Enter your first name:")
let letters = prompt("Enter the state you live in (i.e. NE or FL).")
let farhen = prompt("Enter the temperature in Fahrenheit today.")
let sentence = ["wear a warm coat, hat, scarf, and gloves.", "wear a warm coat but you won't need a hat, scarf or globes.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//Logic to tell the user what to do
if (farhen <= 32) {
  console.log(`${name}, ${sentence[0]}`);
} else if (farhen >= 32 && farhen <= 50 && letters == 'NE') {
  console.log(`${name}, ${sentence[1]}`);
} else if (farhen >= 32 && farhen <= 50 && letters == 'FL') {
  console.log(`${name}, ${sentence[2]}`);
} else if (farhen >= 50 && farhen <= 70) {
  console.log(`${name}, ${sentence[3]}`);
}else {
  console.log(`${name}, have a nice day`);
  }
