//Create Read Update and Delete - the Crud Operations

// const mongodb = require('mongodb')
// // The MongoClient gives us access to the function nessecary to complete the crud operations. 
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//This is a shorthand for grabbing things with MongoDB
const { MongoClient, ObjectID } = require('mongodb')


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
    //     _id:id,
    //     name: 'Bryce',
    //     age:54
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
    // db.collection('taks').insertMany([
    //     {
    //         description: '',
    //         completed: false
    //     },
    //     {
    //         description: '',
    //         completed: false
    //     },
    //     {
    //         description: '',
    //         completed: false
    //     },
    // ], (error, result) => {
    //     if (error){
    //         console.log('unable to save to database')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').findOne({_id: new ObjectID("5cc51b6a6bdf1f4b6ab80379")}, (error, user) => {
    //     if(error){
    //         console.log('Unable To fetch data')
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({age: 27}).toArray((error,users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({age: 27}).count((error,users) => {
    //     console.log(users)
    // })
    db.collection('taks').findOne({_id: new ObjectID ('5cc5141b7e1bd449d8bfdad0')}, (error,task) => {
        if(error){
            console.log('there is an error')
        }
        console.log(task)
    })
    db.collection('taks').find({completed: false}).toArray((error,task) => {
        console.log(task)
    })


})
