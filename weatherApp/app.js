const request = require('request')




//Setting Up Query String- This is where the ? followed by the key value pairs come from.
const url = 'https://api.darksky.net/forecast/c5d46e1b8a00c3c1f9d3790c5b3ee73d/37.8267,-122.4233?key=value&otherKey=otherValue'
// The first argument is the URL(declared above in const url, the second is the function you are going to run. )
request({url:url,json:true}, (error, response) => {
    let JSON = response.body.currently
    console.log('It is Currently',JSON.temperature + ' and there is a ',JSON.precipProbability+ ' percent chance of rain')

})