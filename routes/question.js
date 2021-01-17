var express = require('express');
var router = express.Router();

const QuestionController = require('../controllers/QuestionController');

router.post('/add', QuestionController.addQuestion);
router.get('/list', QuestionController.listQuestion);

module.exports = router;
