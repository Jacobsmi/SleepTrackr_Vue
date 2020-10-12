<template>
  <div id='registration'>
      <div id='registration-box'>
      <div id='header'>Register</div>
        <input id='firstname' class='left' type='text' placeholder="First Name">
        <input id='lastname' type='text' placeholder="Last Name">
        <br>
        <input id='email' class='left' type='text' placeholder="E-Mail"> 
        <br>
        <input id='password' class='left' type='text' placeholder="Password"> 
        <input id='confirmPassword' type='text' placeholder="Confirm Password">  
        <br>
        <button id='submitButton'>Sign Up</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Registration',
    mounted (){
        this.$nextTick(()=>{
            console.log(document.cookie)
        })
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
    width: 10vw;

}
.left{
    margin-left: 20%;
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