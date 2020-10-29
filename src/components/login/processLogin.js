import router from '../../router/index'
export default async (email, password)=>{
    // Create regex patterns for email and password
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
    // Check and see if the email and password match the regex patterns
    var emailResult = emailRegex.test(email)
    var passResult = passwordRegex.test(password)

    var errors = ["", "", ""]
    if(!emailResult || !passResult){
        if (!emailResult){
            errors[0] = "Email is not valid"
        }
        if (!passResult){
            errors[1] = "Password is not valid"
        }
    }else{
        // If all values look valid make a call to the API
        const resp = await fetch('http://localhost:5000/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({
                email:email,
                pass:password
            })
        })
        const respJSON = await resp.json()
        if(respJSON.error){
            if(respJSON.error === 'no_existing_user'){
                errors[2]='No user with that E-Mail'
            }else if(respJSON.error === 'wrong_pass'){           
                errors[2]='Password is incorrect'
            }
        }else{
            document.cookie = ('access_token='+respJSON.access_token +';')
            router.push('home')
            return null	
        }
    return errors
    }
    
}
