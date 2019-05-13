const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model(('User'), {
    //Set:{valueAnObject}
    name:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Thats not a valid email')
            }
        },
        trim:true,
        lowercase:true

    },
    age:{
        type:Number,
        default: 0,
        validate(value){
            if (value < 0){
                throw new Error('Your Age Needs to be a real number')
            }

        }
    },
    password:{
        type:String,
        required: true,
        trim:true,
        minLength: 7,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error ('Password cant contain "password"')
            }
        }
    }
})


module.exports = User