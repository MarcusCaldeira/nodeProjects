//The callback function in this is the function we define and set into setTimeout
setTimeout(()=> {
    console.log('YOO')
},2000)

const names = ['Andrew', 'Derrick', 'Ed']
const shortNames = names.filter((name) => {
    return name.length <= 5 
})
console.log(shortNames)

//If our function is no longer synchronus and we call the callback with the value we want to send back. 
const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitue: 0, 
            longitude: 0, 
        }
        callback(data)
    }, 2000)
}
geocode('Albuquerque', (data) => {
    console.log(data)
})
