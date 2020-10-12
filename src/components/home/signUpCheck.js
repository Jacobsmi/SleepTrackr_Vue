import router from '../../router/index'
export default function (firstName, lastName, email){
    document.cookie = `fn=${firstName}, ln=${lastName}, email=${email}`;
    router.push('register');
}