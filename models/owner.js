const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const OwnerSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    petName: String,
    handle: String
})


module.exports = mongoose.model('Owner', OwnerSchema)