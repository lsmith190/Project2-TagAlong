const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
    name: String,
    address: String,
    rating: Number,
    patio: String,
    imgLink: String
})


module.exports = mongoose.model('Restaurant', RestaurantSchema)