<template>
  <div id='login-page'>
    Login<br>
    <input id='emailInput' placeholder='E-Mail' type='text' /><br>
    <div id='email-errors'>{{ emailErrors }}</div>
    <input @focus='passFocus' id='passInput' placeholder='Password' type='text' /><br>
    <div id='password-errors'>{{ passwordErrors }}</div>
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
        }
    },
    methods: {
        passFocus: () =>{
            document.getElementById("passInput").type = 'password'
        },
        login: async ()=>{
            var email = document.getElementById('emailInput').value
            var pass = document.getElementById('passInput').value
            processLogin(email, pass)
        }
    }
}
</script>

<style>

</style>