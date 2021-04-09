// Assignment code here



// Get Password criteria from user input (prompts)
function generatePasswordOptions(){
  const passwordLength = parseInt(window.prompt("Enter the length of password you would like. Must be 8-128 in length"));
    if (passwordLength < 8 || passwordLength > 128 ) {
      alert('must be between 8 and 128 characters long')
      generatePasswordOptions()  }
  const includeLower = window.confirm("Would you like to include lower case in your password? OK=Yes Cancel=No");  
  const includeUpper = window.confirm("Would you like to include Upper case in your password? OK=Yes Cancel=No");
  const includeSpecial = window.confirm("Would you like to include Special characters in your password? OK=Yes Cancel=No");
  const includeNumber = window.confirm("Would you like to include numbers in your password? OK=Yes Cancel=No");
  // place var's into an object  
  const passwordOptions = {
    hasLower: includeLower,
    hasUpper: includeUpper,
    hasSpecial: includeSpecial,
    hasNumber: includeNumber,
    passwordLength: passwordLength
  };
  //return the password option in object form
  return passwordOptions;
}


// Generate Password with passwordOption and randomFunction numbers
function generatePassword() {  

  // Tie my generator functions in to an object- makes it easy to move the functions around
  const randomFunction = {
    lower: generateRandomLower,
    upper: generateRandomUpper,
    special: generateRandomSpecial,
    number: generateRandomNumber
  };

  // Generator Functions charset from https://www.w3schools.com/html/html_charset.asp
  function generateRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }
  function generateRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }
  function generateRandomSpecial() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33) + String.fromCharCode(Math.floor(Math.random() * 7) + 58)
  }
  function generateRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  // password generated based on variables
  let generatedPassword = ''
  // retrieve passwordOptions object

  var passwordOptions = generatePasswordOptions()  
  // change object names to match with arrays
    var lower = passwordOptions.hasLower
    var upper = passwordOptions.hasUpper
    var special = passwordOptions.hasSpecial
    var number = passwordOptions.hasNumber
    var passwordLength = passwordOptions.passwordLength

  // add how many condition types to generate
  const passwordRequirements = lower + upper + special + number

  // make passwordOptions object into an array filter out false values
  const passwordOptionsArray = [{lower}, {upper}, {special}, {number}].filter(item => Object.values(item)[0])
  // start over if user hits all cancels on prompts
    if(passwordRequirements === 0){
        return '';
      }
  
  // forLoop to build the password with all requirments using a key method and foreach. Learned about usind foreach for traversemedia
  for(let i=0; i<passwordLength; i+=passwordRequirements) {
      passwordOptionsArray.forEach(item => {
        const randomKeys = Object.keys(item)[0];          
        generatedPassword += randomFunction[randomKeys]();
      });
  }

    // use built password as the final password with correct length and return result to generatePassword function
  const finalPassword = generatedPassword.slice(0, passwordLength)
  return finalPassword;
}

// end of my code




// Provided Code -
// Get references to the #generate element (DOM element generate password button)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



