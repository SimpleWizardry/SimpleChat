"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(token) {
  new Promise(function (resolve, reject) {
    _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, function (err, decodedToken) {
      if (err || !decodedToken) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });
}; //function verifyJWTToken


exports["default"] = _default;