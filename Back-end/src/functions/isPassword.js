const isEmpty = require('./isEmpty')

const isPassword = (password, cpassword) => {
    if(isEmpty(password)) return false
    if(password.length < 4 && password.length > 30) return false
   // if(!(isDigit(password) && isSpecial(password) && isLowercase(password) && isUppercase(password))) return false
    if(!isEmpty(cpassword) && cpassword !== password) return false
    return true
}

module.exports = isPassword;