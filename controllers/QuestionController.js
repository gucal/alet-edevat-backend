const connection = require('../helper/db');

module.exports.addQuestion = (req, res) => {
  var question = {
    user_id: req.body.user_id,
    questions_title: req.body.questions_title,
    questions_content: req.body.questions_content,
    check: req.body.check,
    category_id: req.body.category_id,
    label_id: req.body.label_id,
  };
  console.log(question);
  connection.query(
    'INSERT INTO tbl_questions SET ?',
    question,
    (err, result, fields) => {
      if (err) {
        res.json({ status: false, message: 'Yeniden deneyiniz.' });
      } else {
        res.json({ status: true, message: 'Kayıt başarılı' });
      }
    },
  );
};

module.exports.listQuestion = (req, res) => {
  connection.query('SELECT * FROM tbl_questions', (err, result, fields) => {
    if (err) {
      res.json({ status: false, message: 'Yeniden deneyiniz.' });
    } else {
      res.json({ status: true, message: 'Kayıt başarılı', data: result });
    }
  });
};
