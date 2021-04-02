// Assignment code here




// Tie my functions in to an object

const randomFunction = {
  lower: generateRandomLower,
  upper: generateRandomUpper,
  special: generateRandomSpecial,
  number: generateRandomNumber
};

console.log(randomFunction);

// Generator Functions from https://www.w3schools.com/html/html_charset.asp

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



// Get references to the #generate element (DOM element generate password button)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(window.prompt("enter length of password. Must be 8-128 in length"));  
  var hasLower = window.confirm("Would you like to include lower case in your password?");  
  var hasUpper = window.confirm("Would you like to include Upper case in your password?");
  var hasSpecial = window.confirm("Would you like to include Special characters in your password?");
  var hasNumber = window.confirm("Would you like to include numbers in your password?");
  console.log(passwordLength);
  console.log(hasLower);
  console.log(hasUpper);
  console.log(hasSpecial);
  console.log(hasNumber);

  

  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





