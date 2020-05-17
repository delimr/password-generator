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
      //if select 2 types giving the option of and or ","
      //lowercase and something
      case "lowercase and uppercase": case "lowercase, uppercase":
        random = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        break;
      case "lowercase and numeric": case "lowercase, numeric": 
        random = "abcdefghijklmnopqrstuvwxyz0123456789"
        break;
      case "lowercase and special": case "lowercase, special":
        random = "abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        break;
      //uppercase and something
      case "uppercase and lowercase": case "uppercase, lowercase":
        random = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        break;
      case "uppercase and numeric": case "uppercase, numeric":
        random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        break;
      case "uppercase and special": case "uppercase, special": 
        random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        break;
      //numeric and something
      case "numeric and lowercase": case "numeric, lowercase":
        random = "0123456789abcdefghijklmnopqrstuvwxyz"
        break;
      case "numeric and uppercase": case "numeric, uppercase":
        random = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        break;
      case "numeric and special": case "numeric, special":
        random = "0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        break;
      //special and something
      case "special and lowercase": case "special, lowercase":
        random = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~abcdefghijklmnopqrstuvwxyz"
        break;
      case "special and uppercase": case "special, uppercase":
        random = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        break;
      case "special and numeric": case "special, numeric":
        random = "0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        break;
//everything 
      case "lowercase, uppercase, numeric, special": case "lowercase and uppercase and numeric and special": case "everything":
        random = "0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        break;
        
      default:
          alert("Please enter a valid input")
        }
 
//return
var passwd = "";
for (var i = 0; i < parseInt(long); i++) {
// "+=" added concatenate string  
passwd += random.charAt(Math.floor(Math.random() * random.length));
}
return passwd;
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
