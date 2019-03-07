const Pet = require('../models/pet.js')

const petController = {
    index: (req, res) => {
        Pet.find().then(pets => {
            res.render('pets/index', { pets })
        })
    },
    new: (req, res) => {
        res.render('pets/new')
    },
    create: (req, res) => {
        Pet.create(req.body).then(pet => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        Pet.findById(req.params.petId).then(pet => {
            res.render('pets/show', { pet })
        })
    },
    edit: (req, res) => {
        Pet.findById(req.params.petId).then(pet => {
            res.render('pets/edit', { pet })
        })
    },
    update: (req, res) => {
        Pet.findByIdAndUpdate(req.params.petId, req.body, { new: true }).then(() => {
            res.redirect(`/${req.params.petId}`)
        })
    },
    delete: (req, res) => {
        Pet.findByIdAndDelete(req.params.petId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = petController