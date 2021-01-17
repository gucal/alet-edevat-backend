var express = require('express');
var router = express.Router();

const LoginController = require('../controllers/AuthenticationController');

router.post('/', LoginController.login);

module.exports = router;
