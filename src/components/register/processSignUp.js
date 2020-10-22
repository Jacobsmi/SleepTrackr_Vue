import router from '../../router/index'
export default (firstName, lastName, email, pass) =>{
    
    var data = JSON.stringify({
        fname: firstName,
        lname: lastName,
        email: email,
        pass: pass
    })
    
    var signUpRequest = new XMLHttpRequest()
    signUpRequest.open("POST", "http://127.0.0.1:5000/createuser")
    signUpRequest.setRequestHeader("Content-type", "application/json");
    signUpRequest.send(data);
    signUpRequest.onload = () => {
        if (signUpRequest.status === 200){
            var signUpRequestJson = JSON.parse(signUpRequest.response)
            if (signUpRequestJson.status === 'success'){
                // Setting cookie on login
                router.push('home')
            }else if(signUpRequestJson.status === 'failure'){
                if(signUpRequestJson.error === 'duplicate_email'){
                    document.getElementById('other-errors').innerHTML = 'An account with this email already exists'
                }
            }
        }else{
            console.log("Error making the request to API")
        }
    }
    return null
}