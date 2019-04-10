const path = require('path')

const express = require('express')




const app = express()
//Generate the path to the public folder. 
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
/*HBS-This sets up handlebars(Templating Library)
 (view enginge: Key/Setting Name, value: name of installed module')
app.set('view engine','hbs')
/*This serves up static html, by using express and path(given to use by node)
- This is what the public can Access*/
app.use(express.static(publicDirectoryPath))


//THIS is HBS(HandleBars to render dynamic templates)
app.get('', (req, res) => {
    /*First argument is the name of the view to render,
     Second is an object with the views that need to be accessed */
    res.render('index.hbs', {
        title: 'Weather App',
        name: 'Marcus Caldeira'
    })
})
app.get('/about', (req,res) => {
    res.render('about.hbs', {
        title: 'About',
        name: 'Marcus Caldeira'
    })
})
app.get('/help', (req,res) => {
    res.render('help.hbs', {
        helpMessage:'I will try to help you'
    })
})
//This ends handlebars

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