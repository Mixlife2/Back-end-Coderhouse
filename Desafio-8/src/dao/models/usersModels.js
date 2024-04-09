const mongoose = require('mongoose')

const usersSchema= new mongoose.Schema({
    nombre: String,
    email:{
        type: String, unique:true
    }, 
    password: String
})

const Users = mongoose.model('Users', usersSchema)

module.exports = Users


