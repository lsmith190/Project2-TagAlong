const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const PetSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    breed: String,
    favHobby: String,
    ownerName: String,
    imgLink: String
})

module.exports = mongoose.model('Pet', PetSchema)