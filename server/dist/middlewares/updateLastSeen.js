"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

var _default = function _default(req, res, next) {
  /*
  return UserModel.updateOne(
      { _id: req.user.id },
      { $set:{last_seen: new Date() }},
      );
  */
  _models.UserModel.updateOne({
    _id: '6051e14fd07c07174b17c03a'
  }, {
    $set: {
      last_seen: new Date()
    }
  }, function () {});

  next();
};

exports["default"] = _default;