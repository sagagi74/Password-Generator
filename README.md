Rework:

I have changed repo name and site link to more friendly name as
"Password-Generator"
I have tried to commit to main repo with more details Three more times
I have added more details on readme file and commited to repo




This Pasword-Generator has HTML, CSS and Javascripts

I defined variables as following and named as more meaningful way

  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"


When user click on Generate Password button following condtions are validated to run

1. the application checks if inputed value are empty or cancel button are pressed
2. the apppicaiton checks if it is integer
3. the application checks if password length are beween 8 and 128 characters 
4. Prompt for character types as following

  var selectlowercaseCharacters = confirm("Do You want to Include lowercase characters?");
  var selectuppercaseCharacters = confirm("Do You want to Include uppercase characters?");
  var selectnumericCharacters = confirm("Do You want toInclude numeric characters?");
  var selectspecialCharacters = confirm("Do You want to Include special characters?");

5.then The application checks if at least charcter types are selected

6. when Everythinga are validted, then passes "password" that was generated randomly and display on main page.











