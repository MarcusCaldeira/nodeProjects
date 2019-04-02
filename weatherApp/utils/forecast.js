const request = require('request')

//
//Creating a reusable function for getting the forecast
//
//
// 3. The forecast function should have three potential calls to callback
const forecast = (latitude,longitude, callback) => {
    const url = ('https://api.darksky.net/forecast/c5d46e1b8a00c3c1f9d3790c5b3ee73d/' + latitude + ',' +longitude)
    request({url: url, json:true}, (error, response) => {
        if(error){
            callback('Unable to reach location services', undefined)
        } else if (response.body.error){
            callback('Unable to find the weather there', undefined)
        }else{
            callback(undefined, {
                data:response.body.daily.data[1].summary + ' It is Currently '+ response.body.currently.temperature + ' and there is a ' + response.body.currently.precipProbability + ' percent chance of rain'
            })
        }
    })

}

module.exports = forecast
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

