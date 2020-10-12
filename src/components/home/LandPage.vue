<template>
  <div id='home-background'>
      <div id='home-login'>
          <div id='signup-text'>Sign up now to start the journey</div>
          <input id='firstname' type='text' placeholder="First Name">
          <input id='lastname' type='text' placeholder="Last Name">
          <br><br>
          <input id='email' type='text' placeholder="E-Mail">
          <br><br>
          <button id='submitButton'>Sign Up</button>
          <div id='bottom-text'>or <router-link to='/login'>Login</router-link> if you already have an account</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LandPage'
}
</script>

<style scoped>
#home-background{
    height: 92vh;
    width: 100vw;
    background-image: url("../../assets/Bedroom.jpg");
}
#home-login{
    position: absolute;
    top: 25vh;
    left: 60vw;
    height: 30vh;
    width: 24vw;
    background-color: black;
    border-radius: 2vh;
}
#signup-text{
    position: relative;
    top: 3vh;
    margin-left: 2vw;
    color: white;
    font-size: 3vh;
}
#firstname{
    width: 8vw;
    height: 3vh;
    margin-top: 6vh;
    margin-left: 2vw;
    border-radius: 0.5vh;
}
#lastname{
    width: 8vw;
    height: 3vh;
    margin-left: 2vw;
    border-radius: 0.5vh;
}
#email{
    width: 18.5vw;
    height: 3vh;
    margin-left: 2vw;
    border-radius: 0.5vh;
}
#submitButton{
    width: 19vw;
    height: 3vh;
    margin-left: 2vw;
    border-radius: 1vh;
}
#bottom-text{
    color: white;
    position: absolute;
    bottom: 0;
    left: 5vw;
}
#bottom-text a{
    color: white;
}
</style>