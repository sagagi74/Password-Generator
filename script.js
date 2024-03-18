// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//yong yun when event listener triggled by clicking button with id= "generate" which querySelector assigned to generateBtn
//then triggered writePassord() fucntion which call other function called generatePassword()

function  generatePassword() {

  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
 
  



// prompt first message

  var passwordLength = prompt("How many charaters should your password contains? please choose between mininum 8 length and maxinum 128 length:");
 
// check if cancel button pressed or no value are inputed 

   if (passwordLength === null || passwordLength.trim() === "") {
    alert("You did not enter anything or pressed cancel button Please try again.");

    //document.getElementsByName('passwordtext')[0].placeholder= "nothing"

   return;

   } 
   
// convert the input value to integer to check if it is integer or character on first input 

   UserInput = parseInt(passwordLength);
   
   if (isNaN(UserInput) || !Number.isInteger(UserInput)) {
    alert("You inputed: "+ "'" + passwordLength + "'" + " Please enter an integer only. you can choose the number between 8 and 128.");

 
    return;

 
  } else if (isNaN(UserInput) || UserInput < 8 || UserInput > 128) {

    alert("You inputed " + "'" + passwordLength + "'" + " length long, You can only choose the number between 8 and 128.");

    return;

  }

  //console.log (passwordLength)


  // Prompt for character types
  var selectlowercaseCharacters = confirm("Do You want to Include lowercase characters?");
  var selectuppercaseCharacters = confirm("Do You want to Include uppercase characters?");
  var selectnumericCharacters = confirm("Do You want toInclude numeric characters?");
  var selectspecialCharacters = confirm("Do You want to Include special characters?");


  //console.log (lowercaseCharacters)
  //console.log (uppercaseCharacters)
 // console.log (numericCharacters)
 // console.log (specialCharacters)

 //at least one character type is needed to be selected (at least one to be true)

 if (!(selectlowercaseCharacters || selectuppercaseCharacters || selectnumericCharacters || selectspecialCharacters)) {
  alert("At least one character type must be selected.");
  return;
}





var SelectedCharterType = "";

if (selectlowercaseCharacters) SelectedCharterType += lowercaseCharacters
if (selectuppercaseCharacters) SelectedCharterType += uppercaseCharacters
if (selectnumericCharacters) SelectedCharterType += numericCharacters
if (selectspecialCharacters) SelectedCharterType += specialCharacters

password = ""

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * SelectedCharterType.length);
  password += SelectedCharterType[randomIndex];
  console.log(password)
}
console.log("Final")
console.log(password)

return password;


}
