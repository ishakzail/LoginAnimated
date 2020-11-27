const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../config/keys')

const Login = async (req,res) => {
    const {email , password } = req.body
    if(email && password) {
        let userData = await User.findOne({email});
        if(userData){
            const isCorrectPassword = await bcrypt.compare(password , userData.password)
            if(isCorrectPassword){
                const data = JSON.parse(JSON.stringify(userData));
                console.log(JSON.parse(JSON.stringify(userData)));
                let token = await jwt.sign(data , jwtkey)
                userData.token = token
                res.send({token : userData.token})
            } else {
                res.send('password is incorrect !')
            }
        } else {
            res.send('email does not exist !')
        }
    }else {
        res.send('some fileds are not filled')
    }
}

module.exports = Login;