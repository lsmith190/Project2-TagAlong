var express = require('express');
var router = express.Router();
const ownerController = require('../controllers/ownerController.js')
const petController = require('../controllers/petController.js')
const restaurantController = require('../controllers/restaurantController.js')

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Tag Along' });
});

router.get('/restaurants', restaurantController.index)
router.get('/restaurants/new', restaurantController.new)
router.post('/restaurants', restaurantController.create)
router.get('/restaurants/:restaurantId', restaurantController.show)
router.get('/restaurants/:restaurantId/edit', restaurantController.edit)
router.put('/restaurants/:restaurantId', restaurantController.update)
router.delete('/restaurants/:restaurantId', restaurantController.delete)

router.get('/pets', petController.index)
router.get('/pets/new', petController.new)
router.post('/pets', petController.create)
router.get('/pets/:petId', petController.show)
router.get('/pets/:petId/edit', petController.edit)
router.put('/pets/:petId', petController.update)
router.delete('/pets/:petId', petController.delete)

router.get('/owners', ownerController.index)
router.get('/new', ownerController.new)
router.post('/:ownerId', ownerController.create)
router.get('/:ownerId', ownerController.show)
router.get('/:ownerId/edit', ownerController.edit)
router.put('/:ownerId', ownerController.update)
router.delete('/:ownerId', ownerController.delete)

module.exports = router