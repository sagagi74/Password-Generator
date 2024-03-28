
This Pasword-Generator has HTML, CSS and Javascripts

I defined variable as possible inputs as following

  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"


When user click on Generate Password button

1. check if inputed value are empty or cancel button are pressed
2. check if it is integer
3. check if password length are beween 8 and 128 characters 
4. Prompt for character types

  var selectlowercaseCharacters = confirm("Do You want to Include lowercase characters?");
  var selectuppercaseCharacters = confirm("Do You want to Include uppercase characters?");
  var selectnumericCharacters = confirm("Do You want toInclude numeric characters?");
  var selectspecialCharacters = confirm("Do You want to Include special characters?");

5.check if at least charcter types are selected

6. when everhing is ok pass "password" that was generated randomly and display on main page.











