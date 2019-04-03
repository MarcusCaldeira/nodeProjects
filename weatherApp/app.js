const request = require('request')

//Iimporting files from this project. 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//This creates the variable that is the argument passed through the command line.
const address = process.argv[2]
if (!address){
    console.log('that cant be blank')
} else{
    //Callback called with two arguments - Data was an OBJECT, it is now destructed. 
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error){
            console.log(error)
            //Alt-I could use return as it would stop function execution. 
        } else{
            console.log('Error', error)
            //Grabs the data from geocode to print forecast from it. 
            forecast(latitude,longitude, (error, forecastData) => {
                if (error) {
                    console.log(error)
                }  else {
                   console.log(location)
                   console.log(forecastData)
                }
              })
    
        }
    })
}




