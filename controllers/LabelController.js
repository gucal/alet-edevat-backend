const connection = require('../helper/db');

module.exports.labelList = (req, res) => {
  connection.query('SELECT * FROM tbl_labels', (err, result, fields) => {
    if (err) {
      res.json({ status: false, message: 'Hatalı.' });
    } else {
      res.json({ status: true, message: 'Kayıt başarılı', data: result });
    }
  });
};
