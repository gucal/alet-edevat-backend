var express = require('express');
var router = express.Router();

const LabelController = require('../controllers/LabelController');

router.get('/', LabelController.labelList);

module.exports = router;
