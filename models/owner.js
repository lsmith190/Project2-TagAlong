const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const PetSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    breed: String,
    ownerName: String,
    imgLink: String
})

const OwnerSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    petName: [PetSchema],
    handle: String,
    imgLink: String
})


module.exports = mongoose.model('Owner', OwnerSchema)