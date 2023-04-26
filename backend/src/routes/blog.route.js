const express = require('express');
const router = express.Router();

const BlogController = require('../app/controllers/blogController');

router.post('/store', BlogController.store);

router.get('/:id/edit', BlogController.edit);

router.put('/:id', BlogController.update);

router.delete('/:id', BlogController.destroy);

router.get('/detail/:id', BlogController.detail);

module.exports = router;