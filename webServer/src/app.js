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
//Create the Help Page Route.
app.get('/help', (req,res) => {
    res.send('Help Page')
})
//Create the title page. 
app.get('/title', (req,res) => {
    res.send('Title Page')
})
//Create the weather page.
app.get('/weather', (req, res) => {
    res.send('Here is the weather')
})












app.listen(2000, () => {
    console.log('Server DID START')
})