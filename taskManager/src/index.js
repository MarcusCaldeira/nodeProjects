//the starting point for the application via express (initialize the express server)
const express = require('express')

const app = express()
const port = process.env.port || 3000


app.post 

app.listen(port, () => {
    console.log('Server is up on port' + port)

})