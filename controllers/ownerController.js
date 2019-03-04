const Owner = require('../models/owner.js')

const ownerController = {
    index: (req, res) => {
        console.log('Shops here')
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        console.log('Create new owner')
    },
    show: (req, res) => {
        console.log('Show owners')
    },
    edit: (req, res) => {
        console.log('edit owner')
    },
    update: (req, res) => {
        console.log('updated owner')
    },
    delete: (req, res) => {
        console.log('delete owner')
    }
}

module.exports = ownerController