const express = require('express');
const { obtenerBody, responderDefault } = require('../controllers/routerController');
const router = express.Router();

router.post('/',obtenerBody);

router.get('/',responderDefault);

module.exports = router;