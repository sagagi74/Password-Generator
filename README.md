
```

When user click on Generate Password button

1. check if inputed value are empty or cancel button are pressed
2. check if it is integer
3. check if password length are beween 8 and 128 characters 
4.Prompt for character types

  var selectlowercaseCharacters = confirm("Do You want to Include lowercase characters?");
  var selectuppercaseCharacters = confirm("Do You want to Include uppercase characters?");
  var selectnumericCharacters = confirm("Do You want toInclude numeric characters?");
  var selectspecialCharacters = confirm("Do You want to Include special characters?");

5.check if at least charcter types are selected

6. when everhing is ok pass "password" that was generated randomly and display on main page.









```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

