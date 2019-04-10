const path = require('path')

const express = require('express')




const app = express()
//Generate the path to the public folder. 
const publicDirectoryPath = path.join(__dirname,'../public')

/*HBS-This sets up handlebars(Templating Library)
 (view enginge: Key/Setting Name, value: name of installed module')
app.set('view engine','hbs')
/*This serves up static html, by using express and path(given to use by node)
- This is what the public can Access*/
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) => {
    res.render('index.hbs')
})
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