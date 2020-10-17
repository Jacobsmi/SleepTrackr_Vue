export default (firstName, lastName, email) =>{
    var data = JSON.stringify({
        fname: firstName,
        lname: lastName,
        email: email
    })
    var signUpRequest = new XMLHttpRequest()
    signUpRequest.open("POST", "http://localhost:3000/SignUp")
    signUpRequest.setRequestHeader("Content-type", "application/json");
    signUpRequest.send(data);
    signUpRequest.onload = () => {
        if (signUpRequest.status === 200){
            console.log(signUpRequest.response)
        }else{
            console.log("Error making the request to API")
        }
    }
    return null
}