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
            //var signUpRequestJson = JSON.parse(signUpRequest.response)
            //router.push('home')
        }else{
            console.log("Error making the request to API")
        }
    }
    return null
}