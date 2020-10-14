<template>
  <div id='home-background'>
      <div id='tag-line'>Are you ready to revolutionize your sleep?</div>
      <div id='home-login'>
          <div id='signup-text'>Sign up now to start the journey</div>
          <input id='firstname' type='text' placeholder="First Name">
          <input id='lastname' type='text' placeholder="Last Name">
          <br><br>
          <input id='email' type='text' placeholder="E-Mail">
          <br><br>
          <button @click='signUpClicked' id='submitButton'>Sign Up</button>
          <div id='bottom-text'>or <router-link to='/login'>Login</router-link> if you already have an account</div>
      </div>
  </div>
</template>

<script>
import './signUpCheck.js'
import signUpCheck from './signUpCheck.js'
export default {
    name: 'LandPage',
    mounted(){
        console.log("Width", window.innerWidth)
        console.log("Height", window.innerHeight)
        this.$nextTick(()=>{
        })
    },
    methods: {
        signUpClicked (){
            signUpCheck(document.getElementById('firstname').value,document.getElementById('lastname').value,document.getElementById('email').value)
        }
    }
}
</script>

<style scoped>
#home-background{
    font-family: 'Roboto', sans-serif;
    height: 92vh;
    width: 100vw;
    background-image: url("../../assets/Bedroom.jpg");
    background-size: 100vw 92vh;
}
#tag-line{
    position: absolute;
    top: 25vh;
    left: 20vw;
    font-size: 5vh;
    font-weight: bold;
    width: 25vw;
}
#home-login{
    position: absolute;
    top: 25vh;
    left: 60vw;
    height: auto;
    width: 26vw;
    background-color: #17183B;
    border-radius: 2vh;
}
#signup-text{
    margin-top: 2vh;
    text-align: center;
    color: white;
    font-size: 3vh;
}
#firstname{
    width: 8vw;
    height: 3vh;
    margin-top: 5vh;
    margin-left: 15%;
    border-radius: 5px;
}
#lastname{
    width: 8vw;
    height: 3vh;
    margin-left: 2vw;
    border-radius: 5px;
}
#email{
    width: 18.5vw;
    height: 3vh;
    margin-left: 15%;
    border-radius: 5px;
}
#submitButton {
    width: 19vw;
    margin-left: 15%;
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
#bottom-text{
    color: white;
    margin-top: 3vh;
    font-size: 1.5vh;
    text-align: center;
}
#bottom-text a{
    color: white;
}
</style>