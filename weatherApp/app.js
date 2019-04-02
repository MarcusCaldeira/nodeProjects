const request = require('request')




//Setting Up Query String- This is where the ? followed by the key value pairs come from.
const url = 'https://api.darksky.net/forecast/c5d46e1b8a00c3c1f9d3790c5b3ee73d/44.9537,93.0900'
// The first argument is the URL(declared above in const url, the second is the function you are going to run. )
request({url:url,json:true}, (error, response) => {
    if (error){
        console.log('The weather service cant be reached...right now!')
    } else if (response.body){
        console.log('Unable to find the location')
    }
    else{
        let JSON = response.body.currently
        console.log(response.body.daily.data[0].summary + ' It is Currently',JSON.temperature + ' and there is a ',JSON.precipProbability+ ' percent chance of rain')
    }
    
})

// //Setting up the Geocoding API, so that users can search through a database to find what they need. 
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFyY3VzNTUxMDQiLCJhIjoiY2p0ejBwbjNpMWMycjQzbzV3cjQ2eDAxaSJ9.SgG3t2jLCpWeKxWfZGwVkg&limit=1'
// request({url:geocodeURL,json:true}, (error, response) => {
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]
//     console.log(latitude, longitude)
// })