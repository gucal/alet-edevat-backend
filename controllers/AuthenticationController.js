const connection = require('../helper/db');

module.exports.login = (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  if (email && password) {
    console.log(email, password);
    connection.query(
      'SELECT * FROM  tbl_users WHERE email = ? AND password = ?',
      [email, password],
      (err, results, fields) => {
        if (results.length > 0) {
          if (err) {
            res.json({ status: false, message: 'Yanlis bilgi.' });
          } else {
            res.json({ status: true, message: 'Giris basarili' });
          }
          res.end();
        } else {
          res.json({ status: false, message: 'Bilgiler yanlış' });
          res.end();
        }
      },
    );
  } else {
    res.send('Validation error');
    res.end();
  }
};
