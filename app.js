var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

let userType = require('./routes/usertype_routes');
let userss = require('./routes/users_routes');
let society = require('./routes/society_routes');
let flat = require('./routes/flat_routes');
let block = require('./routes/block_routes');
let userblock = require('./routes/userblock_routes');
let everydaycategory = require('./routes/everydaycategory_routes');
let everyday = require('./routes/everyday_routes');
let usertypename = require('./routes/usertype_name_routes');
let flatSecretary = require('./routes/flat_routes2');
let userblockroutes2 = require('./routes/userblock_routes2');
let notice=require('./routes/notice_route');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/usertype',userType);
app.use('/userss',userss);
app.use('/society',society);
app.use('/flat',flat);
app.use('/block',block);
app.use('/userblock',userblock);
app.use('/everydaycategory',everydaycategory);
app.use('/everyday',everyday);
app.use('/usertypename',usertypename);
app.use('/flatsecretary',flatSecretary);
app.use('/userblock2',userblockroutes2);
app.use('/getNotice',notice);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
