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
        <input id='password' class='left' style='width: 10vw;' type='text' placeholder="Password"> 
        <input id='confirmPassword' style='width: 10vw;' type='text' placeholder="Confirm Password">  
        <br>
        <button @click = 'signUpClicked' id='submitButton'>Sign Up</button>
      </div>
  </div>
</template>

<script>
import getCookieInfo from './getCookieInfo'
import checkSignUpValues from './checkSignUpValues'
export default {
    name: 'Registration',
    mounted (){
        this.$nextTick(()=>{
            var info = getCookieInfo();
            if (Array.isArray(info)){
                console.log("Cookie not empty; Regstration")
                document.getElementById('firstname').value = info[0]
                document.getElementById('lastname').value = info[1]
                document.getElementById('email').value = info[2]
            }
        })
    },
    methods: {
        signUpClicked: ()=> {
            document.getElementById("name-errors").innerHTML = ""
            document.getElementById("email-error").innerHTML = ""
            var firstName = document.getElementById('firstname').value
            var lastName = document.getElementById('lastname').value
            var email = document.getElementById('email').value
            var errors = checkSignUpValues(firstName, lastName, email)
            if (errors[0] === false && errors[1] === false){
                document.getElementById("name-errors").innerHTML = 'First and Last name are invalid'
            }else if(errors[0] === false){
                document.getElementById("name-errors").innerHTML = 'First name is invalid'
            }else if(errors[1] === false){
                document.getElementById("name-errors").innerHTML = 'Last name is not valid'
            }
            if(errors[2] === false){
                document.getElementById("email-error").innerHTML = 'Email is not valid'
            }
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