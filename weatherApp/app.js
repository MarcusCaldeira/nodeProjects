const request = require('request')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')




// //Setting Up Query String- This is where the ? followed by the key value pairs come from.
// const url = 'https://api.darksky.net/forecast/c5d46e1b8a00c3c1f9d3790c5b3ee73d/44.9537,93.0900'
// // The first argument is the URL(declared above in const url, the second is the function you are going to run. )
// request({url:url,json:true}, (error, response) => {
//     if (error){
//         console.log('The weather service cant be reached...right now!')
//     } else if (response.body.error){
//         console.log('The WEATHER DATABSE IS DOWN RIGHT NOW!')
//     }
//     else{
//         let JSON = response.body.currently
//         console.log(response.body.daily.data[0].summary + ' It is Currently',JSON.temperature + ' and there is a ',JSON.precipProbability+ ' percent chance of rain')
//     }
    
// })



geocode('Saint Paul', (error, data) => {
    console.log('Error', error)
    console.log('data', data)
})


forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })