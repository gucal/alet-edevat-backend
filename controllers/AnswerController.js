const connection = require('../helper/db');

module.exports.addAnswer = (req, res) => {
  var answer = {
    user_id: req.params.user_id,
    answer_content: req.body.answer_content,
    question_id: req.params.question_id,
  };
  connection.query(
    'INSERT INTO tbl_answer SET ?',
    answer,
    (err, result, fields) => {
      if (err) {
        res.json({ status: false, message: 'Yeniden deneyiniz.' });
      } else {
        res.json({ status: true, message: 'Kayıt başarılı' });
      }
    },
  );
};

module.exports.listAnswer = (req, res) => {
  var question_id = req.params.question_id;
  console.log(question_id);
  console.log(req);
  connection.query(
    `SELECT * FROM tbl_answer WHERE question_id=${question_id}`,
    (err, result, fields) => {
      if (err) {
        res.json({ status: false, message: 'Yeniden deneyiniz.' });
      } else {
        res.json({ status: true, message: 'Kayıt başarılı', data: result });
      }
    },
  );
};
