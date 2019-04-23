console.log('Client Side Javascript')



fetch('http://localhost:2000/weather?adress=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        } else
        console.log(data)
    })
})

const weatherForm =document.querySelector('form')
const searchElement =document.querySelector('input')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value
    console.log(location)
})