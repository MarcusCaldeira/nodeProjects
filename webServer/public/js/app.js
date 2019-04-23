console.log('Client Side Javascript')


fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:2000/weather?adress=Boston').then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        } else
        console.log(data)
    })
})