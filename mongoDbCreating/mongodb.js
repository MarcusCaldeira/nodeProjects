//Create Read Update and Delete - the Crud Operations

const mongodb = require('mongodb')
// The MongoClient gives us access to the function nessecary to complete the crud operations. 
const MongoClient = mongodb.MongoClient


//Using Mongos Protocol://IP Adress(localhost gets weird):Port Number
const connectionURL = 'mongodb://127.0.0.1:27017'
const dataBaseName = 'task-manager'

/*MongoClient to connect to server.the only method(ConnectionURL,
    OptionsObject{useNewURlParser:true},
    Callback Function that gets called when connected to the database) */
MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client) => {
    if(error){
       return console.log('Unable to Connect from Database')
    }
    //gives a database refrence, so that we can use it in the code.
    const db = client.db(dataBaseName)

    // db.collection('users').insertOne({
    //     name: 'Marcus',
    //     age:27
    // }, (error, result) => {
    //     if (error){
    //         console.log('unable to inser user.')
    //     }
    //     console.log(result.ops)

    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name:'Marcus',
    //         age: 28
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to save to database')
    //     }
    //     console.log(result.ops)

    // })
    db.collection('taks').insertMany([
        {
            description: '',
            completed: false
        },
        {
            description: '',
            completed: false
        },
        {
            description: '',
            completed: false
        },
    ], (error, result) => {
        if (error){
            console.log('unable to save to database')
        }
        console.log(result.ops)
    })

})
