export default (firstName, lastName, email) =>{
    var nameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var firstNameResult = nameRegex.test(firstName)
    var lastNameResult = nameRegex.test(lastName)
    var emailResult = emailRegex.test(email)
    if(firstNameResult && lastNameResult && emailResult){
        console.log("Ready for API call")
        return null
    }
    return [firstNameResult, lastNameResult, emailResult]
}