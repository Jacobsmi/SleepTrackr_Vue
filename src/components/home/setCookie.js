export default (cname, cvalue)=>{
    var d = new Date();
    d.setTime(d.getTime() + 10000)
    var expires = ("expires=" + d.toUTCString());
    document.cookie = cname + "=" + cvalue + ";" + expires + ";"
}