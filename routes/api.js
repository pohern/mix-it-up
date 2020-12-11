const router = require('express').Router()
const drinksCtrl = require('../controllers/api/drinks')

router.get('/drinks', drinksCtrl.index);
router.get('/drinks/:id', drinksCtrl.show);
router.post('/drinks', drinksCtrl.create);
router.put('/drinks/:id', drinksCtrl.update);
router.delete('/drinks/:id', drinksCtrl.delete)

module.exports = router;