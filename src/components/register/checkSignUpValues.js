export default (firstName, lastName, email, pass, confirmPass) =>{
    // Set regex to test names and emails against
    var nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
    /*
    *   Passwords must be 
    * - At least 8 characters long, max length anything
    * - Include at least 1 lowercase letter
    * - 1 capital letter
    * - 1 number
    * - 1 special character => !@#$%^&* 
    */
    var firstNameResult = nameRegex.test(firstName)
    var lastNameResult = nameRegex.test(lastName)
    var emailResult = emailRegex.test(email)
    var passResult = passwordRegex.test(pass)

    if (pass != confirmPass){
        passResult = false
    }

    if(firstNameResult && lastNameResult && emailResult && passResult){
        return null
    }

    var errorMessages = ['','', '']
    if (firstNameResult === false && lastNameResult === false){
        errorMessages[0] = 'First and Last name are invalid'
    }else if(firstNameResult === false){
        errorMessages[0] = 'First name is invalid'
    }else if(lastNameResult === false){
        errorMessages[0] = 'Last name is not valid'
    }

    if(emailResult === false){
        errorMessages[1] =  'Email is not valid'
    }
    
    if(passResult === false && pass !== confirmPass){
        errorMessages[2] = 'Password is not strong enough or invalid and passwords do not match'
    }else if(passResult === false){
        errorMessages[2] = 'Password is not strong enough or invalid'
    }else if(pass !== confirmPass){
        errorMessages[2] = 'Passwords do not match'
    }

    return errorMessages
}