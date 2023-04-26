const express = require('express');
const router = express.Router();

const BeverageController = require('../app/controllers/BeverageController');

router.post('/store', BeverageController.store);

router.get('/:id/edit', BeverageController.edit);

router.put('/:id', BeverageController.update);

router.delete('/:id', BeverageController.destroy);

router.get('/detail/:id', BeverageController.detail);



module.exports = router;