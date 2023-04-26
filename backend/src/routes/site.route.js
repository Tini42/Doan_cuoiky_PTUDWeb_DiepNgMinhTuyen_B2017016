const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/siteController');

// router.post('/', SiteController.store);

router.get('/', SiteController.index);

router.get('/menu', SiteController.menu);

router.post('/login', SiteController.login);

module.exports = router;