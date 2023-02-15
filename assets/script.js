// Assignment code here
var generateBtn = document.querySelector("#generate");


//What does your password (pw) require?
var pwrequirements = {


  pwlength: 0,
  pwlowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  pwuppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pwnumeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  pwspecial: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", 
    ".", "/", "=", " > ", " ? ", "@", "[", "]", " ^ ", "`", 
    "{", "|", "}", "~"],

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var result = "";
  var pwlength = 0;
  var lowercase;
  var uppercase;
  var numeric;
  var special;


  pwlength = 0;
  pwrequirements.pwlength = 0;
  result = "";


  //Password length
  while (pwlength < 8 || pwlength > 128) {
    pwlength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");


    //if user presses cancel
    if (pwlength === null) {
      return "Your secure password";
    }
    else {

      if (!isFinite(pwlength)) {
        alert("Please enter a number.");
        return "Your secure password";
      }
      else {
       
        if (pwlength < 8 || pwlength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {


          //Window prompts showing requirements
          showPrompts();


          while (pwrequirements.pwlength < pwlength) { 
            if (lowercase === false && uppercase === false && numeric === false && special === false) {
              alert("You must select at least one criteria in order to move forward.")
              showPrompts();
            }
            else {
             
              if (lowercase === true && pwrequirements.pwlength < pwlength) {
                var lc = pwrequirements.pwlowercase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwrequirements.pwlength++;
              }

              if (uppercase === true && pwrequirements.pwlength < pwlength) {
                var uc = pwrequirements.pwuppercase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwrequirements.pwlength++;
              }

              if (numeric === true && pwrequirements.pwlength < pwlength) {
                var num = pwrequirements.pwnumeric[Math.floor(Math.random() * 10)]
                result = result + num;
                pwrequirements.pwlength++;
              }

              
              if (special === true && pwrequirements.pwlength < pwlength) {
                var sc = pwrequirements.pwspecial[Math.floor(Math.random() * 25)]
                result = result + sc;
                pwrequirements.pwlength++;
              }
            }
          }
        }
      }
    }


    return result;


    function showPrompts() {
      lowercase = confirm("Do you want to use lower case letters?");
      uppercase = confirm("Do you want to use upper case letters?");
      numeric = confirm("Do you want to use numbers?");
      special = confirm("Do you want to use any special characters?");
    }
  }
}