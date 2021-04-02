// Assignment code here

// Generator Functions

function generateRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function generateRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function generateRandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}

function generateRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

console.log(generateRandomLower());
console.log(generateRandomUpper());
console.log(generateRandomSpecial());
console.log(generateRandomNumber());


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
