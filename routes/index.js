var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tag Along' });
});

const ownerController = require('../controllers/ownerController.js')

router.get('/owners', ownerController.index)
router.get('/new', ownerController.new)
router.post('/:ownerId', ownerController.create)
router.get('/:ownerId', ownerController.show)
router.get('/:ownerId/edit', ownerController.edit)
router.put('/:ownerId', ownerController.update)
router.delete('/', ownerController.delete)

module.exports = router