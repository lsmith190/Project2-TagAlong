var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tag Along' });
});

const ownerController = require('../controllers/ownerController.js')

router.get('/', ownerController.index)
router.get('/new', ownerController.new)
router.post('/', ownerController.create)
router.get('/:ownerId', ownerController.show)
router.get('/:ownerId/edit', ownerController.edit)
router.put('/:ownerId', ownerController.update)
router.delete('/:ownerId', ownerController.delete)

module.exports = router