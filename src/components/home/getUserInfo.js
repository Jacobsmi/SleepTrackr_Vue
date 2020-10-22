export default () => {
    var access_token = "" 
    var cookies = document.cookie.split(';')
    cookies.forEach(cookie =>{
        var cookieParts = cookie.split('=')
        if(cookieParts[0] === 'access_token'){
            access_token = cookieParts[1]
        }
    })
    console.log("Making request to the API")
    var basicInfoRequest = new XMLHttpRequest()
    basicInfoRequest.open("GET", "http://127.0.0.1:5000/protected")
    basicInfoRequest.setRequestHeader('Authorization', 'Bearer ' + access_token)
    basicInfoRequest.send()
    basicInfoRequest.onload = () => {
        console.log("API response:" +  basicInfoRequest.response)
    }
}