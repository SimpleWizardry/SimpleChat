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
      var authorId = req.query.author_id;

      _models.DialogModel.find({
        author: authorId
      }).populate(['author', 'partner']).exec(function (err, dialogs) {
        if (err) {
          return res.status(404).json({
            message: 'Dialogs not found'
          });
        }

        res.json(dialogs);
      });
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var postData = {
        author: req.body.author,
        partner: req.body.partner
      };
      var dialog = new _models.DialogModel(postData);
      dialog.save().then(function (dialogObj) {
        res.json(dialogObj);
        var message = new _models.MessageModel({
          text: req.body.text,
          dialog: dialogObj._id,
          user: req.body.author
        });
        message.save().then(function () {
          res.json({
            dialogObj: dialogObj
          });
        })["catch"](function (reason) {
          res.json(reason);
        });
      })["catch"](function (reason) {
        res.json(reason);
      });
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      var id = req.params.id;

      _models.DialogModel.findOneAndRemove({
        _id: id
      }).then(function () {
        res.json({
          message: 'Dialog deleted'
        });
      })["catch"](function () {
        res.json({
          message: 'Dialog not found'
        });
      });
    }
    /*
    index(req, res) {
        const authorId = req.user.id;
        DialogModel.find({author: authorId}, (err, dialogs) => {
            if (err) {
                return res.status(404).json({
                    message: 'Dialogs not found'
                })
            }
            res.json(dialogs);
        })
    }
    delete(req, res) {
        const id = req.params.id;
        UserModel.findOneAndRemove({_id: id})
            .then((user) => {
                res.json({
                    message: `User ${user.full_name} deleted`
                })
            })
            .catch(() => {
                res.json({
                    message: 'User not found'
                })
            })
    }
    getMe() {
    }
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
       */

  }]);

  return DialogController;
}();

var _default = DialogController;
exports["default"] = _default;