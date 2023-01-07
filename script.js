// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var characters;
  var little;
  var capital;
  var numbers;
  var weird;

  passwordText.value = password;

  function generatePassword () {
    // window prompt for number of characters
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
            characters = passwordLength.value;
            lower();}
    // window prompt for lowercase characters
    function lower () {
      var lowerCase = confirm("Should your password include lowercase characters?\nYes = OK\nNo = Cancel");
      if (lowerCase == true) {
        little = ("abcdefghijklmnopqrstuvwxyz");
        upper();
      } else {
        upper();}
      }
    //window prompt for uppercase characters 
      function upper () {
        var upperCase = confirm("Should your password include uppercase characters?\nYes = OK\nNo = Cancel");
        if (upperCase == true) {
          capital = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
          numeric();
        } else {
          numeric();}
        }
    // window prompt for numeric characters
      function numeric () {
        var numericChars = confirm("Would you like to include numbers in your password?\nYes = OK\nNo = Cancel");
        if (numericChars == true) {
          numbers = ("1234567890")
          special();
        } else {
          special();}
        }
    // window prompt for special characters
        function special () {
          var specialChars = confirm("Would you like to include special characters in your password?\nSpecial Characters include $, %, *, !, &, @, ), #, (, ^, ~, ?, +\nYes = OK\nNo = Cancel");
          if (specialChars == true) {
            weird = ("!@#$%^&*()+~?")
            return;
          } else {
            return;
        }

  }

 }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
