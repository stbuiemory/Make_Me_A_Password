// Assignment Code
var generateBtn = document.querySelector("#generate");


//What does your password (pw) require?
var pwrequirements = {


  pwlength: 0,
  pwlowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  pwuppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pwnumeric: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],


  pwspecial: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
}


// Write password to the #password input on index.html
function writePassword() {
  //call generatePassword function
  var password = generatePassword();
 
  //set passwordText = to the textArea on index.html witht he ID of password
  var passwordText = document.querySelector("#password");


  //update the textArea with the new password
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//function to handle the operations to generate a new password
function generatePassword() {


  //holds the password to be generated and returned
  var result = "";


  //variables to collect input from user prompts
  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var specialChar;


  //initialize characters
  passwordLength = 0;
  pwrequirements.pwlength = 0;
  result = "";


  //check password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? \nPassword must be between 8 and 128 characters.");


    //if user presses cancel
    if (passwordLength === null) {
      return "Your secure password";
    }
    else {
      //checking user enters an integer
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number");
        return "Your secure password";
      }
      else {
        //check password meets length criteria
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {


          //call the internal function to show prompts for criteria
          showPrompts();


          //keep adding characters based on criteria until pwlength is = to the length the user set
          while (pwrequirements.pwlength < passwordLength) {
            //if statement to make sure the user selects at least one of the criteria  
            if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts();
            }
            else {
              //if the user selected lowercase and there is still room to add characters then
              //randomly grab a lowercase letter from the array and add it to the end of result
              //update pwlength by 1
              if (lowerCase === true && pwrequirements.pwlength < passwordLength) {
                var lc = pwrequirements.pwlowercase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwrequirements.pwlength++;
              }


              //if the user selected a special character and there is still room to add characters then
              //randomly grab a apecial character from the array and add it to the end of result
              //update pwlength by 1              
              if (specialChar === true && pwrequirements.pwlength < passwordLength) {
                var sc = pwrequirements.pwspecial[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwrequirements.pwlength++;
              }


              //if the user selected an uppercase letter and there is still room to add characters then
              //randomly grab an uppercase letter from the array and add it to the end of result
              //update pwlength by 1
              if (upperCase === true && pwrequirements.pwlength < passwordLength) {
                var uc = pwrequirements.pwuppercase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwrequirements.pwlength++;
              }


              //if the user selected a number and there is still room to add characters then
              //randomly grab a number from the array and add it to the end of result
              //update pwlength by 1
              if (numbers === true && pwrequirements.pwlength < passwordLength) {
                var num = pwrequirements.pwnumeric[Math.floor(Math.random() * 10)]
                result = result + num;
                pwrequirements.pwlength++;
              }
            }
          }
        }
      }
    }


    //return the generated password back to the calling function
    return result;


    //internal function to prompt the user for criteria
    function showPrompts() {
      lowerCase = confirm("Do you want to use lower case letters?");
      upperCase = confirm("Do you want to use upper case letters?");
      numbers = confirm("Do you want to use numbers?");
      specialChar = confirm("Do you want to use any special characters?");
    }
  }
}