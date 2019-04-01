const request = require('request')


const url = 'https://api.darksky.net/forecast/c5d46e1b8a00c3c1f9d3790c5b3ee73d/37.8267,-122.4233'
// The first argument is the URL(declared above in const url, the second is the function you are going to run. )
request({url:url,json:true}, (error, response) => {
    console.log('It is Currently',response.body.currently.temperature + ' and there is a ',response.body.currently.precipProbability+ ' percent chance of rain')

})