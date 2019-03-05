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
    // create: (req, res) => {
    //     Owner.create(req.body).then(owner => {
    //         res.redirect("/")
    //     })

    create: (req, res) => {
        Owner.create(req.body).then(owner => {
            res.redirect("/owner")
        })
    },
    show: ('/owners', (req, res) => {
        res.send('Show owners here')
    }),

    edit: ('/edit', (req, res) => {
        // res.send('Edit owners here')
        res.render('edit')
    }),
    update: (req, res) => {
        console.log('updated owner')
    },
    delete: (req, res) => {
        console.log('delete owner')
    }
}

module.exports = ownerController