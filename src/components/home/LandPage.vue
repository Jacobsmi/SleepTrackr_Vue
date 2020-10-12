<template>
  <div id='home-background'>
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
export default {
    name: 'LandPage',
    mounted(){
        console.log("Width", window.innerWidth)
        this.$nextTick(()=>{
            if(window.innerWidth < 1500){
                this.mediumConfig()
            }
        })
    },
    methods: {
        mediumConfig() {
            document.getElementById('home-login').style.height = '45vh'
            document.getElementById('home-login').style.width = '28vw'
            document.getElementById('bottom-text').style.left = '15%'
        },
        signUpClicked (){
            console.log("The sign up button was clicked")
        }
    }
}
</script>

<style scoped>
#home-background{
    height: 92vh;
    width: 100vw;
    background-color: #03045e;
}
#home-login{
    position: absolute;
    top: 25vh;
    left: 60vw;
    height: 35vh;
    width: 26vw;
    background-color: #0077b6;
    border-radius: 2vh;
}
#signup-text{
    position: relative;
    top: 3vh;
    margin-left: 15%;
    color: white;
    font-size: 3vh;
}
#firstname{
    width: 8vw;
    height: 3vh;
    margin-top: 6vh;
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
#submitButton{
    width: 19vw;
    height: 3vh;
    margin-left: 15%;
    border-radius: 1vh;
    transition-duration: 0.5s;
}
#submitButton:hover{
    background-color: #A3CEF1;
}
#bottom-text{
    color: white;
    position: absolute;
    bottom: 0;
    left: 20%;
}
#bottom-text a{
    color: white;
}
</style>