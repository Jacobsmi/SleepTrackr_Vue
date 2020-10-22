export default () =>{
    if (document.cookie === ""){
        return null
    }
    var cookieData = {}
    var cookies = document.cookie.split(';')
    cookies.forEach(cookie =>{
        var cookieParts = cookie.split('=')
        var cookieName = cookieParts[0].replace(' ','')
        cookieName = cookieName.replace('"','')
        cookieData[cookieName] = cookieParts[1]
    })
    return [cookieData.firstName, cookieData.lastName, cookieData.email]
    
}