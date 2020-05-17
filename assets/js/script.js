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
 
    switch(characters){
      //if select only one type
      //if select lowercase
      case "lowercase":
        random = "abcdefghijklmnopqrstuvwxyz"
        break;
      //if select uppercase
      case "uppercase":
        random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        break;
      //if select numeric
      case "numeric":
        random = "0123456789"
        break;
      //if select special
      case "special":
        random = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        break;
      