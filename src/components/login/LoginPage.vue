<template>
  <div id='login-page'>
    <h1>Login</h1>
    <input id='emailInput' placeholder='E-Mail' type='text' /><br>
    <div id='email-errors' class='error'>{{ emailErrors }}</div>
    <input @focus='passFocus' id='passInput' placeholder='Password' type='text' /><br>
    <div id='password-errors' class='error'>{{ passwordErrors }}</div>
    <div id='other-errors' class='error'>{{ otherErrors }}</div>
    <button @click='login' id='loginButton'>Login</button>
  </div>
</template>

<script>
import processLogin from './processLogin'
export default {
    name: 'LoginPage',
    data(){
        return{
            emailErrors: "",
            passwordErrors: "",
            otherErrors: ""
        }
    },
    methods: {
        passFocus: () =>{
            document.getElementById("passInput").type = 'password'
        },
        async login(){
            var email = document.getElementById('emailInput').value
            var pass = document.getElementById('passInput').value
            var errors = await processLogin(email, pass)
            if (errors !== null){
                this.emailErrors = errors[0]
                this.passwordErrors = errors[1]
                this.otherErrors = errors[2]
            }
        }
    }
}
</script>

<style>
#login-page{
    text-align: center;
}
.error{
    color: red;
}
</style>