const Owner = require('../models/owner.js')

const ownerController = {
    index: (req, res) => {
        Owner.find().then(owners => {
            res.render('owners/index', { owners })
        })
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        Owner.create(req.body).then(owner => {
            res.render("owners/show", { owner })
        })
    },
    show: (req, res) => {
        Owner.findById(req.params.ownerId).then(owner => {
            res.render('owners/show', { owner })
        })
    },
    edit: (req, res) => {
        Owner.findById(req.params.ownerId).then(owner => {
            res.render('owners/edit', { owner })
        })
    },
    update: (req, res) => {
        Owner.findByIdAndUpdate(req.params.ownerId, req.body, { new: true }).then(owner => {

            res.render('owners/show', { owner })
        })
    },
    delete: (req, res) => {
        Owner.findByIdAndDelete(req.params.ownerId).then(owner => {
            res.redirect('/')
        })
    }
}

module.exports = ownerController