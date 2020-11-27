const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const {jwtkey} = require('../config/keys')
const isPassword = require('../functions/isPassword')

const Register = async (req,res) => {
    const {email , password , confirmPassword , firstName , lastName } = req.body
    try {
        const userData = new User({
            email , password , firstName , lastName
        })
        User.findOne({email})
            .then(async user => {
                if(!user){
                    if(!isPassword(confirmPassword , password)){
                        res.send('password and confirmed password are not the same !')
                    } else {
                        userData.password = await bcrypt.hash(password , 12)
                        User.create(userData)
                        console.log('user created')            
                        res.status(201).json(userData)
                    }
                } else {
                    res.send('user already exists')
                }
            })
            .catch(err => {
                res.send('error in catch :' + err)
                console.log(err)
            })
    } catch (error) {
        res.send("error :" + error)
    }
}

module.exports = Register;