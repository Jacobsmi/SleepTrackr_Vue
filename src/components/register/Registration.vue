<template>
  <div id='registration'>
      <div id='registration-box'>
      <div id='header'>Register</div>
        <input id='firstname' class='left' style='width: 10vw;' type='text' placeholder="First Name">
        <input id='lastname' type='text' style='width: 10vw;' placeholder="Last Name">
        <br>
        <div id='name-errors' class='errors'></div> 
        <input id='email' class='left' style='width: 21.5vw;' type='text' placeholder="E-Mail"> 
        <br>
        <div id='email-error' class='errors'></div> 
        <input @focus='passFocus' id='password' class='left' style='width: 10vw;' type='text' placeholder="Password"> 
        <input @focus='confirmFocus' id='confirmPassword' style='width: 10vw;' type='text' placeholder="Confirm Password">  
        <br>
        <div id='password-errors' class='errors'></div>
        <button @click = 'signUpClicked' id='submitButton'>Sign Up</button>
      </div>
  </div>
</template>

<script>
import getCookieInfo from './getCookieInfo'
import checkSignUpValues from './checkSignUpValues'
import processSignUp from './processSignUp'
export default {
    name: 'Registration',
    mounted (){
        this.$nextTick(()=>{
            var info = getCookieInfo();
            if (Array.isArray(info)){
                document.getElementById('firstname').value = info[0]
                document.getElementById('lastname').value = info[1]
                document.getElementById('email').value = info[2]
            }
        })
    },
    methods: {
        // Method that is called when the signup button is clicked
        signUpClicked: async ()=> {
            // Resets any errors that may have existed previously
            document.getElementById("name-errors").innerHTML = ""
            document.getElementById("email-error").innerHTML = ""
            // Gets values from the form
            var firstName = document.getElementById('firstname').value
            var lastName = document.getElementById('lastname').value
            var email = document.getElementById('email').value
            var pass = document.getElementById('password').value
            var confirmPass = document.getElementById('confirmPassword').value
            // Calls the checkSignUpValues and checks the variables for errors and then gets any error messages as return
            var errorMessages = checkSignUpValues(firstName, lastName, email, pass, confirmPass)
            // Checks to see if there are an errors and then displays if there are
            if(errorMessages !== null){
                document.getElementById("name-errors").innerHTML = errorMessages[0]
                document.getElementById("email-error").innerHTML = errorMessages[1]
                document.getElementById("password-errors").innerHTML = errorMessages[2]
            }
            // If there are no errors in the data provided
            else{
                // Make a call to the API
                await processSignUp(firstName, lastName, email, pass)
            }
        },

        passFocus: ()=>{
            document.getElementById("password").type = 'password'
        },
        confirmFocus: ()=>{
            document.getElementById("confirmPassword").type = 'password'
        }
    }
}
</script>

<style>
#registration{
    height: 92vh;
    background-color: #ADD7F6;
}
#registration-box{
    margin: 0 auto;
    position: relative;
    top: 10vh;
    width: 35vw;
    background-color: white;
}
#header{
    padding-top: 2vh;
    margin-bottom: 8vh;
    font-size: 5vh;
    font-weight: bold;
    text-align: center;
}
#registration-box input{
    height: 3vh;
    margin-top: 2vh;
    margin-right: 1vw;

}
.left{
    margin-left: 20%;
}
.errors{
    margin-left: 20%;
    color: red;
}
#submitButton {
    margin-top: 5vh;
    margin-bottom: 2vh;
    width: 22vw;
    height: 5vh;
    margin-left: 20%;
	box-shadow:inset 0px -3px 7px 0px #29bbff;
	background:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);
	background-color:#2dabf9;
	border-radius:3px;
	border:1px solid #0b0e07;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:9px 23px;
	text-decoration:none;
	text-shadow:0px 1px 0px #263666;
}
#submitButton:hover {
	background:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);
	background-color:#0688fa;
}
#submitButton:active {
	position:relative;
	top:1px;
}
</style>