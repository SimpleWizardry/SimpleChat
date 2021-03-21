"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _controllers = require("./controllers");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _middlewares = require("./middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

_dotenv["default"].config();

_mongoose["default"].connect("mongodb+srv://".concat(process.env.DB_LOGIN, "qmpz@mycluster.ehxqa.mongodb.net/ChatDB?retryWrites=true&w=majority"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var dbConnection = _mongoose["default"].connection;
dbConnection.on('error', function (err) {
  return console.log("Connection error: ".concat(err));
});
dbConnection.once('open', function () {
  return console.log('Connected to DB');
});
app.use(_bodyParser["default"].json());
app.use(_middlewares.updateLastSeen);
app.use(_middlewares.checkAuth);
var User = new _controllers.UserController();
var Dialog = new _controllers.DialogController();
var Message = new _controllers.MessageController();
app.get('/user/:id', User.show);
app["delete"]('/user/:id', User["delete"]);
app.post('/user/registration', User.create);
app.post('/user/login', User.login);
app.get('/dialogs', Dialog.index);
app["delete"]('/dialog/:id', Dialog["delete"]);
app.post('/dialog', Dialog.create);
app.get('/messages', Message.index);
app.post('/messages', Message.create);
app["delete"]('/messages/:id', Message["delete"]);
app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3005');
});