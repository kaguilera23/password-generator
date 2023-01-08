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
            return false;
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
        return false;
      }
       }

       var x = characters();   
       if (!x) {
        return "Try again!";
       };

      var a = lower();
      var b = upper();
      var c = numeric();
      var d = special();

      console.log(x);
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);

      var lowercaseLetters = ('abcdefghijklmnopqrstuvwxyz')
      var capitalLetters = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
      var numbers = ('1234567890')
      var specialCharacters = ('$%*!&@)#(^~?+')

    if (a && b && c && d) {
      var characters = lowercaseLetters.concat(capitalLetters, numbers, specialCharacters)
        console.log("little, big, numbers, %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (a && !b && !c && !d) {
        var characters = lowercaseLetters;
        console.log("only little");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (b && !a && !b && !c) {
        var characters = capitalLetters;
        console.log("only big");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (c && !a && !b && !d) {
        var characters = numbers;
        console.log("only numbers");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (d && !a && !b && !c) {
        var characters = specialCharacters;
        console.log("only %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (a && b && c && !d) {
        var characters = lowercaseLetters.concat(capitalLetters, numbers)
        console.log("little, big, numbers");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (b && c && d && !a) {
        var characters = capitalLetters.concat(numbers, specialCharacters)
        console.log("big, numbers, %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (a && c && d && !b) {
        var characters = lowercaseLetters.concat(numbers, specialCharacters);
        console.log("little, numbers, %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (a && b && d && !c) {
        var characters = lowercaseLetters.concat(capitalLetters, specialCharacters)
        console.log("little, big, %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (a && b && !c && !d) {
        var characters = lowercaseLetters.concat(capitalLetters)
        console.log("big and little");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (a && c && !b && !d) {
        var characters = lowercaseLetters.concat(numbers)
        console.log("little numbers");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (a && d && !b && !c) {
        var characters = lowercaseLetters.concat(specialCharacters)
        console.log("little and %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (b && c && !a && !d) {
        var characters = capitalLetters.concat(numbers)
        console.log("big and numbers");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (b && d && !a && !c) {
        var characters = capitalLetters.concat(specialCharacters)
        console.log("big and %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (c && d && !a && !b) {
        var characters = numbers.concat(specialCharacters)
        console.log("numbers and %");
        var generatedPassword = randomize(x);
        return generatedPassword;
      }
      else if (!(a && b && c && d)) {
        return "Unable to create password. Please select at least one password element. Try again!";
      }
        
    function randomize(passwordlength) {
      var randomPassword = "";
      var charactersTwo = characters;
      for (var i = 0; i < passwordlength; i++) {
        randomPassword += charactersTwo.charAt(Math.floor(Math.random() * charactersTwo.length))
      }
      return randomPassword;
    }


    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);