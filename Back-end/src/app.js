const express = require('express')
const V1 = require('./routes/V1')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const {mongoURI} = require('./config/keys')
const app = express();
const cors = require('cors')


app.use(cors())
app.use(bodyparser.json())

/** DataBase Connection */
mongoose
    .connect(mongoURI , {useNewUrlParser : true , useUnifiedTopology : true , useFindAndModify : false , useCreateIndex : true})
    .then(()=> console.log('DataBase is connected successfully'))
    .catch(err => console.log('erreur in db :' +err))

/** Routes */
app.use(V1)

module.exports =app ;
