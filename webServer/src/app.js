const express = require('express')

const app = express()

/*
The app.get takes in the /route and then takes in a 
function
(req = Request contains information about incoming request to server)
(res = Response )
  */ 
app.get('', (req,res) => {
    res.send('Hello Express!')
})


app.listen(2000, () => {
    console.log('Server DID START')
})