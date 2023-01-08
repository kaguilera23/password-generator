// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

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
            var characterLength = passwordLength;
            return characterLength;
          }
    }
    
    // window prompt for lowercase characters
    function lower () {
      var lowerCase = confirm("Should your password include lowercase characters?\nYes = OK\nNo = Cancel");
      if (lowerCase == true) {
        return true;
      } else {
      return false;}
      }
    //window prompt for uppercase characters 
    function upper () {
      var upperCase = confirm("Should your password include uppercase characters?\nYes = OK\nNo = Cancel");
       if (upperCase == true) {
         return true;
       } else {
        return false;}
       }
    // window prompt for numeric characters
    function numeric () {
      var numericChars = confirm("Would you like to include numbers in your password?\nYes = OK\nNo = Cancel");
        if (numericChars == true) {
         return true;
       } else {
        return false;}
       }

    // window prompt for special characters
    function special () {
      var specialChars = confirm("Would you like to include special characters in your password?\nSpecial Characters include $, %, *, !, &, @, ), #, (, ^, ~, ?, +\nYes = OK\nNo = Cancel");
        if (specialChars == true) {
          return true;
         } else {
          return false;}
       }

       var x = characters();    
var a = lower();
var b = upper();
var c = numeric();
var d = special();

      console.log(x);
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);

    if (a && b && c && d) {
        console.log("Hello");
      } else if (a && !b && !c && !d) {
        console.log("only little");
      } else if (b && !a && !b && !c) {
        console.log("only big");
      } else if (c && !a && !b && !d) {
        console.log("only numbers");
      } else if (d && !a && !b && !c) {
        console.log("only %");
      } else if (a && b && c && !d) {
        console.log("little, big, numbers");
      } else if (b && c && d && !a) {
        console.log("big, numbers, %");
      } else if (a && c && d && !b) {
        console.log("little, numbers, %");
      } else if (a && b && d && !c) {
        console.log("little, big, %");
      } else if (a && b && !c && !d) {
        console.log("big and little");
      } else if (a && c && !b && !d) {
        console.log("little numbers");
      } else if (a && d && !b && !c) {
        console.log("little and %");
      } else if (b && c && !a && !d) {
        console.log("big and numbers");
      } else if (b && d && !a && !c) {
        console.log("big and %");
      } else if (c && d && !a && !b) {
        console.log("numbers and %");
      } else if (!(a && b && c && d)) {
        console.log("Sorry, your password has no characters");
      }
        


    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);