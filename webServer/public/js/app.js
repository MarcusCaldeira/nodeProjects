console.log('Client Side Javascript')





const weatherForm =document.querySelector('form')
const searchElement =document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')


messageOne.textContent = 'From Js'


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value
    fetch('http://localhost:2000/weather?adress='+location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else
                console.log(data)
        })
    })
})