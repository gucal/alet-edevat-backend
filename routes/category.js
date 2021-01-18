var express = require('express');
var router = express.Router();

const CategoryController = require('../controllers/CategoryController');

router.get('/', CategoryController.categoryList);

module.exports = router;
