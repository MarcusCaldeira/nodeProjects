const mongoose = require('mongoose')
const validator = require('validator')
//This will connect to the database. URL+PORT+PORT & Options Object 
mongoose.connect('mongodb://127.0.1:27017/taskManagerApi', {
    useNewUrlParser: true,
    //this ensures data is accessible
    useCreateIndex:true
})
// //Takes two arguments(stringNameOfModel,definition-the fields we want)


// const me = new User ({

//     name:'Hugo    ',
//     email:'Make@gmail.COM   ',
//     password:'Phone898!'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) =>{
//     console.log('There was an error' + error)
// })

const Task = mongoose.model(('tasks'), {
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})

const task = new Task({
    description:'        Eat Lunch',
    completed: true
})

task.save().then((task) => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})