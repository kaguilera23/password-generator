// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

  function generatePassword () {
    var little;
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
            var characters = passwordLength;
            console.log(characters);
            lower();
          }
    // window prompt for lowercase characters
    function lower () {
      var lowerCase = confirm("Should your password include lowercase characters?\nYes = OK\nNo = Cancel");
      if (lowerCase == true) {
        var little = lowerCase;
        upper();
      } else {
        upper();};

        console.log(little)
      }
    //window prompt for uppercase characters 
    function upper () {
      var upperCase = confirm("Should your password include uppercase characters?\nYes = OK\nNo = Cancel");
       if (upperCase == true) {
         var capital = upperCase;
         numeric();
       } else {
         numeric();}
       }
    // window prompt for numeric characters
    function numeric () {
      var numericChars = confirm("Would you like to include numbers in your password?\nYes = OK\nNo = Cancel");
        if (numericChars == true) {
         var numbers = numericChars;
         special();
       } else {
         special();}
       }
    // window prompt for special characters
    function special () {
      var specialChars = confirm("Would you like to include special characters in your password?\nSpecial Characters include $, %, *, !, &, @, ), #, (, ^, ~, ?, +\nYes = OK\nNo = Cancel");
        if (specialChars == true) {
         var weird = specialChars;
          return;
         } else {
           return;}
       }
       
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);