const mongoose = require('mongoose');

const User = new  mongoose.Schema( {
    nome: { type: String, required: true},
    telefone: { type: String,},
    email: { type: String, required: true }, 
})

module.exports =  mongoose.model('Usuario', User)