import router from '../../router/index'
import setCookie from './setCookie'
export default function (firstName, lastName, email){
    setCookie("firstName", firstName);
    setCookie("lastName", lastName);
    setCookie("email", email);
    router.push('register');
}