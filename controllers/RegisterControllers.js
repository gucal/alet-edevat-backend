const connection = require('../helper/db');

module.exports.register = (req, res) => {
  var users = {
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    user_point: 0,
  };
  console.log(users);
  connection.query(
    'INSERT INTO tbl_users SET ?',
    users,
    (err, response, fields) => {
      if (err) {
        res.json({ status: false, message: 'Yeniden deneyiniz.' });
      } else {
        res.json({ status: true, message: 'Kayıt başarılı' });
      }
    },
  );
};
