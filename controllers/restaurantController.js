// const Restaurant = require('../models/restaurant.js')

// const restaurantController = {
//     index: (req, res) => {
//         Restaurant.find().then(restaurants => {
//             res.render('restaurants/index', { restaurants })
//         })
//     },
//     new: (req, res) => {
//         res.render('new')
//     },
//     create: (req, res) => {
//         Restaurant.create(req.body).then(restaurant => {
//             res.render("restaurants/show", { restaurant })
//         })
//     },
//     show: (req, res) => {
//         Restaurant.findById(req.params.restaurantId).then(restaurant => {
//             res.render('restaurants/show', { restaurants })
//         })
//     },
//     edit: (req, res) => {
//         Restaurant.findById(req.params.restaurantId).then(restaurant => {
//             res.render('restaurants/edit', { restaurant })
//         })
//     },
//     update: (req, res) => {
//         Restaurant.findByIdAndUpdate(req.params.restaurantId, req.body, { new: true }).then(restaurant => {

//             res.render('restaurants/show', { restaurant })
//         })
//     },
//     delete: (req, res) => {
//         Restaurant.findByIdAndDelete(req.params.restaurantId).then(restaurant => {
//             res.redirect('/')
//         })
//     }
// }

// module.exports = restaurantController