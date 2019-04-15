const path = require('path')
const express = require('express')
const hbs = require('hbs')
//express App Object Variable.
const app = express()
//Define paths for express config.  
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath =  path.join(__dirname,'../templates/partials')
//Setup Handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//Sets up a static directory to serve. 
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
        helpMessage:'I will try to help you',
        title: 'Help Page',
        name: 'Marcus Caldeira'
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

app.get('/help/*', (req, res) => {
    res.render('404.hbs', {
        title: 'Help Article Not Found',
        name:'Marcus Caldeira',
        errorMessage: 'Help Article Not Found'  
    })

})

//This 404 Page must come last 
app.get('*', (req, res) => {
    res.render('404.hbs', {
        title:'404 PAGE',
        name: 'Marcus Caldeira',
        errorMessage: 'Page Not Found'
    })

})




app.listen(2000, () => {
    console.log('Server DID START')
})