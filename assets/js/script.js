// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  //prompted for password criteria
  var long = prompt("Please enter how many characters between 8 to 128");
  var type = prompt("Please enter character type: lowercase, uppercase, numeric, special or everything");
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
 
//generates function password
  function generatePassword() {
//information provided by cx
    var random = "";
    var characters = type.toLowerCase();
 
   