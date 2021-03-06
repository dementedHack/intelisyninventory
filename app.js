var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var add_item = require('./routes/add_item');
var edit_item = require('./routes/edit_item');
var assets = require('./routes/assets');
var employees = require('./routes/employees');
var add_employee = require('./routes/add_employee');
var employee_assets = require('./routes/employee_assets');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/kai/:id', function(req, res){
	console.log('Hi')
	res.send(req.params);
})

app.use('/', index);
app.use('/users', users);
app.use('/add_item', add_item);
app.use('/edit_item', edit_item);
app.use('/assets', assets);
app.use('/employees', employees);
app.use('/add_employee', add_employee);
app.use('/employee_assets', employee_assets);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
