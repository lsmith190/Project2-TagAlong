var express = require('express');
var router = express.Router();
const ownerController = require('../controllers/ownerController.js')
    // const petController = require('../controllers/petController.js')
const restaurantController = require('../controllers/restaurantController.js')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tag Along' });
});

router.get('/restaurants', restaurantController.index)

router.get('/owners', ownerController.index)
router.get('/new', ownerController.new)
router.post('/:ownerId', ownerController.create)
router.get('/:ownerId', ownerController.show)
router.get('/:ownerId/edit', ownerController.edit)
router.put('/:ownerId', ownerController.update)
router.delete('/:ownerId', ownerController.delete)

// router.get('/pets', petController.index)
// router.get('/newpet', petController.new)
// router.post('/:petId', petController.create)
// router.get('/:petId', petController.show)
// router.get('/:petId/edit', petController.edit)
// router.put('/:petId', petController.update)
// router.delete('/', petController.delete)


router.get('/restaurants/new', restaurantController.new)
router.post('/restaurants/:restaurantId', restaurantController.create)
router.get('/restaurants/:restaurantId', restaurantController.show)
router.get('/restaurants/:restaurantId/edit', restaurantController.edit)
router.put('/restaurants/:restaurantId', restaurantController.update)
router.delete('/restaurants/:restaurantId', restaurantController.delete)

module.exports = router