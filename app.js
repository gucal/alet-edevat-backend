const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
var cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const questionsRouter = require('./routes/question');
const labelRouter = require('./routes/label');
const categoryRouter = require('./routes/category');
const answerRouter = require('./routes/answer');

const app = express();
app.use(cors());
//db connection
require('./helper/db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/question', questionsRouter);
app.use('/labels', labelRouter);
app.use('/categories', categoryRouter);
app.use('/answer', answerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
