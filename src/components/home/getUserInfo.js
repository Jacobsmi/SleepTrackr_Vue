export default () => {
    // Parse the access token out of the cookie and 
    var access_token = "" 
    var cookies = document.cookie.split(';')
    cookies.forEach(cookie =>{
        cookie = cookie.trim()
        var cookieParts = cookie.split('=')
        if(cookieParts[0] === 'access_token'){
            access_token = cookieParts[1]
        }
    })

    var basicInfoRequest = new XMLHttpRequest()
    basicInfoRequest.open("GET", "http://localhost:5000/protected")
    basicInfoRequest.setRequestHeader('Authorization', 'Bearer ' + access_token)
    basicInfoRequest.send()
    basicInfoRequest.onload = () => {
        var basicInfoRequestJSON = JSON.parse(basicInfoRequest.response)
        console.log(basicInfoRequestJSON)
        if(basicInfoRequestJSON.msg){
            if(basicInfoRequestJSON.msg === 'Token has expired'){
                console.log("The token has expired")
            }
        }else if(basicInfoRequestJSON.logged_in_as){
            console.log("The user is logged in")
        }
    }
}