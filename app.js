var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const expressLayouts = require('express-ejs-layouts')
const authController = require('./controllers/auth.controller')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountsRouter = require('./routes/account');
var dashboardRouter = require('./routes/dashboard');
var salaryRouter = require('./routes/salary');

// var authRouter = require('./routes/auth');

const connect = require('./db/connect');
connect()

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts)
app.set('layout', './layouts/index')


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("codetoanbug06"));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/user', authController.checkLogin, usersRouter);
app.use('/account', authController.checkLogin, accountsRouter);
app.use('/salary', authController.checkLogin, salaryRouter);
app.use('/dashboard', authController.checkLogin, dashboardRouter);

// app.use('/auth', authRouter);

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
  var status = err.status || 500
  res.render('pages/error', { layout: 'layouts/auth', mes: res.locals.message, status });
});

module.exports = app;
