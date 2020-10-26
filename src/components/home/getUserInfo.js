export default async () => {
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

    const resp = await fetch('http://localhost:5000/basicuserinfo', {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    })
    if (resp.ok){
        const respJSON = await resp.json()
        return respJSON
    }
    else{
        return null
    }
}