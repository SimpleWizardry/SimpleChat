"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(user) {
  var token = _jsonwebtoken["default"].sign({
    data: (0, _lodash.reduce)(user, function (result, value, key) {
      if (key !== "password") {
        result[key] = value;
      }

      return result;
    }, {})
  }, process.env.JWT_SECRET || "", {
    expiresIn: process.env.JWT_MAX_AGE,
    algorithm: "HS256"
  });

  return token;
};

exports["default"] = _default;