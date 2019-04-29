const mongoose = require('mongoose')
//This will connect to the database. URL+PORT+PORT & Options Object 
mongoose.connect('mongodb://127.0.1:27017/taskManagerApi', {
    useNewUrlParser: true,
    //this ensures data is accessible
    useCreateIndex:true
})
//Takes two arguments(stringNameOfModel,definition-the fields we want)
const User = mongoose.model(('User'), {
    //Set:{valueAnObject}
    name:{
        type:String
    },
    age:{
        type:Number
    }
})

const me = new User ({
    name:'Marcus',
    age: 27 
})

me.save().then((me) => {
    console.log(me)
}).catch((error) =>{
    console.log('There was an error' + error)
})