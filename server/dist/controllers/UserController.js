"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController = /*#__PURE__*/function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "show",
    value: function show(req, res) {
      var id = req.params.id;

      _models.UserModel.findById(id, function (err, user) {
        if (err) {
          return res.status(404).json({
            message: 'Not found'
          });
        }

        res.json(user);
      });
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      var id = req.params.id;

      _models.UserModel.findOneAndRemove({
        _id: id
      }).then(function (user) {
        res.json({
          message: "User ".concat(user.full_name, " deleted")
        });
      })["catch"](function () {
        res.json({
          message: 'User not found'
        });
      });
    }
  }, {
    key: "getMe",
    value: function getMe() {}
  }, {
    key: "create",
    value: function create(req, res) {
      var postData = {
        email: req.body.email,
        full_name: req.body.full_name,
        password: req.body.password
      };
      res.send();
      var user = new _models.UserModel(postData);
      user.save().then(function (obj) {
        res.json(obj);
      })["catch"](function (reason) {
        res.json(reason);
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;