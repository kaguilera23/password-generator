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
    // window prompt for number of characters
    function characters () {
      var passwordLength = prompt("Number of Password Characters?\nPick a Number Between 8 and 128!");
          if (passwordLength == null) {
            return;
          } else if (passwordLength == "") {
            alert("Please pick a length for your password");
            generatePassword();
          } else if (passwordLength < 8) {
            alert("Your password cannot be less than 8 characters. Please try again!");
            generatePassword();
          } else if (passwordLength > 128) {
            alert("Your password cannot be more than 128 characters. Please try again!");
            generatePassword();
          } else {
            lower();}
          }
    // window prompt for lowercase characters
    function lower () {
      var lowerCase = confirm("Should your password include lowercase characters?\nYes = OK\nNo = Cancel");
      if (lowerCase == true) {
        upper();
      } else {
        upper();}
      }
    //window prompt for uppercase characters 
      function upper () {
        var upperCase = confirm("Should your password include uppercase characters?");
        if (upperCase == true) {
          numeric();
        } else {
          numeric();}
        }
    // window prompt for numeric characters
      function numeric () {
        var numericChars = confirm("Would you like to include numbers in your password?");
        if (numericChars == true) {
          special();
        } else {
          special();}
        }

    // window prompt for special characters
        function special () {
          var specialChars = confirm("Would you like to include special characters in your password?\nSpecial Characters include $, %, *, !, etc.");
          if (specialChars == true) {
            alert("Okay now what");
          } else {
            alert ("Not sure what to do next")};
        }

        characters();

  }

 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
