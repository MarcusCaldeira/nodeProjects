const request = require('request')

//Iimporting files from this project. 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



geocode('Saint Paul', (error, data) => {
    if (error){
        console.log('Something went wrong:(')

    } else{
        console.log('Error', error)
        console.log('data', data)
        //Grabs the data from geocode to print forecast from it. 
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log('Error', error)
            console.log('Data', data)
          })

    }
})


