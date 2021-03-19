import { MessageModel } from "../models";

class DialogController {
    index(req, res) {
        const dialogId = req.query.dialog;
        MessageModel.find({ dialog: dialogId })
            .populate('dialog')
            .exec((err, messages) => {
            if (err) {
                return res.status(404).json({
                    message: 'Messages not found'
                })
            }
            return res.json(messages);
        })
    }
    create(req, res)  {
        const postData = {
            text: req.body.text,
            user: req.body.user,
            dialog: req.body.dialog_id
        }
        const message = new MessageModel(postData);
        message.save().then((obj) => {
            res.json(obj)
        }).catch((reason) => {
            res.json(reason)
        });
    }
    delete(req, res) {
        const id = req.params.id;
        MessageModel.findOneAndRemove({_id: id})
            .then(() => {
                res.json({
                    message: 'Message deleted'
                })
            })
            .catch(() => {
                res.json({
                    message: 'Message not found'
                })
            })
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
}
export default DialogController;