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


    db.collection('taks').updateMany({
        completed: false
    }, {
        $set:{
            completed:true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})