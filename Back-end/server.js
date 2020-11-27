const app = require('./src/app')

var port  = process.env.PORT || 4000 

const server = app.listen(port , () => {
    console.log('Server is running successfully on :' + port);
})


