//import AES from 'crypto-js/aes'
const crypto = require('crypto-js')

var en = crypto.AES.encrypt('Message', 'TEST KEY 123');
console.log(en.toString())
var de = crypto.AES.decrypt(en.toString(), 'TEST KEY 123')
console.log(de.toString(crypto.enc.Utf8))