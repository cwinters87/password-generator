// Assignment code here


// Tie my generator functions in to an object

const randomFunction = {
  lower: generateRandomLower(),
  upper: generateRandomUpper(),
  special: generateRandomSpecial(),
  number: generateRandomNumber()
};

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





// Get Password criteria from user input

function generatePasswordOptions(){
  const passwordLength = parseInt(window.prompt("enter length of password. Must be 8-128 in length"));
    if (passwordLength < 8) {
      alert('must be at least 8 characters long')
      generatePasswordOptions()  }
  const includeLower = window.confirm("Would you like to include lower case in your password?");  
  const includeUpper = window.confirm("Would you like to include Upper case in your password?");
  const includeSpecial = window.confirm("Would you like to include Special characters in your password?");
  const includeNumber = window.confirm("Would you like to include numbers in your password?");  
  passwordOptions = {
    haslower: includeLower,
    hasUpper: includeUpper,
    hasSpecial: includeSpecial,
    hasNumber: includeNumber,
    length: passwordLength
  };
  return passwordOptions;
}


// Generate Password with passwordOption and randomFunction numbers
function generatePassword() {  
  const passwordOptions = generatePasswordOptions();
    console.log('passwordOptions', typeof passwordOptions)
    console.log(passwordOptions)
  var randomfunc = new Object(randomFunction)
    console.log('randomFunction', typeof randomFunction)
    console.log(randomFunction)
  let generatedPassword = 'hello';






  const finalPassword = generatedPassword
    console.log(finalPassword)
  return finalPassword;
}



// Get references to the #generate element (DOM element generate password button)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




