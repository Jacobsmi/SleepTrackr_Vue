export default (email, password)=>{
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/

    var emailResult = emailRegex.test(email)
    var passResult = passwordRegex.test(password)

    var errors = ["", "", ""]
    if (!emailResult){
        errors[0] = "Email is not valid"
    }
    if (!passResult){
        errors[1] = "Password is not valid"
    }
}