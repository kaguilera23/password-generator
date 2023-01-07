// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // console.log("I love you");
  // alert("I love you");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword () {
    var characters = prompt("Number of Password Characters?\nPick a Number Between 8 and 128!");
    if (characters < 8) {
      alert("Your password cannot be less than 8 characters. Please try again!");
    } else if (characters > 128) {
      alert("Your password cannot be more than 128 characters. Please try again!");
    } else {
      lower();
    }
  };

 function lower () {
  var lowerCase = confirm("Should your password include lowercase characters?\nYes = OK\nNo = Cancel");
  if (lowerCase == true) {
    upper();
  } else {
    upper();
  } 

  function upper () {
    var upperCase = confirm("Should your password include uppercase characters?");
    if (upperCase == true) {

    }
  }
 }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
