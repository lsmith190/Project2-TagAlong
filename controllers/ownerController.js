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

    //below redirects to page that now says "Show owners here"
    create: ('/owners', (req, res) => {
        res.send('Show all owners')
    }),
    show: (req, res) => {
        console.log('Show owners')
    },
    edit: ('/edit', (req, res) => {
        res.send('Edit owners here')
    }),
    update: (req, res) => {
        console.log('updated owner')
    },
    delete: (req, res) => {
        console.log('delete owner')
    }
}

module.exports = ownerController