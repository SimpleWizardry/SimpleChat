"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _models = require("../models");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DialogController = /*#__PURE__*/function () {
  function DialogController() {
    _classCallCheck(this, DialogController);
  }

  _createClass(DialogController, [{
    key: "index",
    value: function index(req, res) {
      var dialogId = req.query.dialog;

      _models.MessageModel.find({
        dialog: dialogId
      }).populate('dialog').exec(function (err, messages) {
        if (err) {
          return res.status(404).json({
            message: 'Messages not found'
          });
        }

        return res.json(messages);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var postData = {
        text: req.body.text,
        user: req.body.user,
        dialog: req.body.dialog_id
      };
      var message = new _models.MessageModel(postData);
      message.save().then(function (obj) {
        res.json(obj);
      })["catch"](function (reason) {
        res.json(reason);
      });
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      var id = req.params.id;

      _models.MessageModel.findOneAndRemove({
        _id: id
      }).then(function () {
        res.json({
          message: 'Message deleted'
        });
      })["catch"](function () {
        res.json({
          message: 'Message not found'
        });
      });
    }
    /*
    create(req, res)  {
        const postData = {
            author: req.body.author,
            partner: req.body.partner
        }
        res.send()
        const dialog = new DialogModel(postData);
        dialog.save().then((obj) => {
            res.json(obj)
        }).catch((reason) => {
            res.json(reason)
        });
    }
    delete(req, res) {
        const id = req.params.id;
        DialogModel.findOneAndRemove({_id: id})
            .then(() => {
                res.json({
                    message: 'Dialog deleted'
                })
            })
            .catch(() => {
                res.json({
                    message: 'Dialog not found'
                })
            })
    }
       */

  }]);

  return DialogController;
}();

var _default = DialogController;
exports["default"] = _default;