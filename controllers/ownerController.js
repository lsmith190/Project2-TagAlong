const Owner = require('../models/owner.js')

const ownerController = {
    index: (req, res) => {
        Owner.find().then(owners => {
            res.render('index', { owners })
        })
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        Owner.create(req.body).then(owner => {
            res.redirect("/")
        })
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