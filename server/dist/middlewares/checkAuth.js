"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _libs = require("../libs");

var _default = function _default(req, res, next) {
  if (req.path === "/user/signin" || req.path === "/user/signup" || req.path === "/user/verify") {
    return next();
  }

  var token = "token" in req.headers ? req.headers.token : null;

  if (token) {
    (0, _libs.verifyJWTToken)(token).then(function (user) {
      if (user) {
        req.user = user.data._doc;
      }

      next();
    })["catch"](function () {
      res.status(403).json({
        message: "Invalid auth token provided."
      });
    });
  }
};

exports["default"] = _default;