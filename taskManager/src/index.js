//the starting point for the application via express (initialize the express server)
const express = require('express')

const app = express()
const port = process.env.port || 3000

app.use(express.json())
//Same exact call signature... 1. The Path 2. The function that runs when someone tries to access a particular route.
app.post('/users', (req,res) => {
    console.log(req.body)
    res.send('Testing!')

})

app.listen(port, () => {
    console.log('Server is up on port' + port)

})