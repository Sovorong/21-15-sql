




const chiper =require('crypto-js')
const salt='dsdsdsd'

//암호화
const encrypt = chiper.AES.encrypt('옥수정바보',salt).toString()
console.log(encrypt)
//복호화
const decrypt = chiper.AES.decrypt(encrypt, salt)
const text = decrypt.toString( chiper.enc.Utf8 )
console.log('derypt:',text)

