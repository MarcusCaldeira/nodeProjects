const express = require('express')

const app = express()

/*
The app.get takes in the /route and then takes in a 
function
(req = Request contains information about incoming request to server)
(res = Response )
  */ 
app.get('', (req,res) => {
    res.send('<h1>WEATHER</h1>')
})
//Create the Help Page Route.
app.get('/help', (req,res) => {
    res.send({
        name:'Marcus', 
        age: 27
    })
})
//Create the title page. 
app.get('/about', (req,res) => {
    res.send('About Page')
})
//Create the weather page.
app.get('/weather', (req, res) => {
    res.send('Here is the weather')
})












app.listen(2000, () => {
    console.log('Server DID START')
})