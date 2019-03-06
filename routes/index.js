var express = require('express');
var router = express.Router();
const ownerController = require('../controllers/ownerController.js')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tag Along' });
});

router.get('/owners', ownerController.index)
router.get('/new', ownerController.new)
router.post('/:ownerId', ownerController.create)
router.get('/:ownerId', ownerController.show)
router.get('/:ownerId/edit', ownerController.edit)
router.put('/:ownerId', ownerController.update)
router.delete('/:ownerId', ownerController.delete)


module.exports = router