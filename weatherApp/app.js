const request = require('request')

//Iimporting files from this project. 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


console.log(process.argv)


geocode('Saint Paul', (error, data) => {
    if (error){
        console.log(error)
        //Alt-I could use return as it would stop function execution. 
    } else{
        console.log('Error', error)
        console.log('data', data)
        //Grabs the data from geocode to print forecast from it. 
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                console.log(error)
            }  else {
               console.log(data.location)
               console.log(forecastData)
            }
          })

    }
})


