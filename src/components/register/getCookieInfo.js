export default () =>{
    if (document.cookie === ""){
        return null
    }
    var parts = document.cookie.split(';');
    var firstName = parts[0].split("=")[1]
    var lastName = parts[1].split("=")[1]
    var email = parts[2].split("=")[1]
    console.log("fn: " +firstName)
    console.log("ln: " +lastName)
    console.log("e: " +email)
    return [firstName, lastName, email]
    
}