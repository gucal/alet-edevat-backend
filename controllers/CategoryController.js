const connection = require('../helper/db');

module.exports.categoryList = (req, res) => {
  connection.query('SELECT * FROM tbl_categories', (err, result, fields) => {
    if (err) {
      res.json({ status: false, message: 'Hatalı.' });
    } else {
      res.json({ status: true, message: 'Kayıt başarılı', data: result });
    }
  });
};
