// //The callback function in this is the function we define and set into setTimeout
// setTimeout(()=> {
//     console.log('YOO')
// },2000)

// const names = ['Andrew', 'Derrick', 'Ed']
// const shortNames = names.filter((name) => {
//     return name.length <= 5 
// })
// console.log(shortNames)

// //If our function is no longer synchronus and we call the callback with the value we want to send back. 
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitue: 0, 
//             longitude: 0, 
//         }
//         callback(data)
//     }, 2000)
// }
// geocode('Albuquerque', (data) => {
//     console.log(data)
// })



// //Define an add function that accepts the correct arguments
// const add = (a, b, callback) => {
// //Use setTimeout to simulate a 2 second delay
//     setTimeout(() => {
//         callback( a * b)
//     }, 2000)
// }
// //After 2 seconds are up, call the callback function with the sum
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is My Error', undefined)
        callback(undefined, [1,4,7])
    },2000)
}

doWorkCallback((error,result) => {
    if (error){
        return console.log(error)
    }
    console.log(result)
})