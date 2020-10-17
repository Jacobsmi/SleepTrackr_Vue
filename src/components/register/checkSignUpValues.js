export default (firstName, lastName, email) =>{
    // Set regex to test names and emails against
    var nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var firstNameResult = nameRegex.test(firstName)
    var lastNameResult = nameRegex.test(lastName)
    var emailResult = emailRegex.test(email)
    if(firstNameResult && lastNameResult && emailResult){
        return null
    }
    var errorMessages = ['','']
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
    return errorMessages
}