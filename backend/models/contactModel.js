const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    lastName:{
        type: String,
    },
    firstName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number,
    }
},{
    timestamps: true
})

const Contact = mongoose.model('User', contactSchema);
module.exports = Contact;