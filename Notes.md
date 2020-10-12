# How Things Work

## Sign Up

- When a user clicks the sign up button on the homepage the information is passed to signUpCheck.js in the home components folder
- After the information is checked for completeness the first name, last name, and email are then stored in a cookie as csv
- The user is then redirected to the Register router where the Registration component reads from the cookie and sets the values properly on the registration page
