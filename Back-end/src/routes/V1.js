const express = require('express')
const router = express.Router()


/**  User Routes */

const Login = require('../controllers/login');
const Register = require('../controllers/Register');


router.post('/login' ,Login)
router.post('/register' , Register)


module.exports = router;