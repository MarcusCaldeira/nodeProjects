const path = require('path')

const express = require('express')




const app = express()
//Generate the path to the public folder. 
const publicDirectoryPath = path.join(__dirname,'../public')


//This serves up static html, by using express and path(given to use by node)
app.use(express.static(publicDirectoryPath))

/*
The app.get takes in the /route and then takes in a 
function
(req = Request contains information about incoming request to server)
(res = Response )
  */ 
app.get('/weather', (req, res) => {
    res.send({
        location: 'Saint Paul',
        forecast: 'Its Pretty Sunny'
    })
})












app.listen(2000, () => {
    console.log('Server DID START')
})