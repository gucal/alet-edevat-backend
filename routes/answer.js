var express = require('express');
var router = express.Router();

const AnswerController = require('../controllers/AnswerController');

router.post('/add-answer/:user_id/:question_id', AnswerController.addAnswer);
router.get('/list-answer/:question_id', AnswerController.listAnswer);

module.exports = router;
