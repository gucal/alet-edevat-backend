var express = require('express');
var router = express.Router();

const RegisterController = require('../controllers/RegisterControllers');

router.post('/', RegisterController.register);

module.exports = router;
