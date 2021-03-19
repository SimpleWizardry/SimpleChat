import { DialogModel, MessageModel } from "../models";

class DialogController {
    index(req, res) {
        const authorId = req.query.author_id;
        DialogModel.find({author: authorId})
            .populate(['author','partner'])
            .exec((err, dialogs) => {
            if (err) {
                return res.status(404).json({
                    message: 'Dialogs not found'
                })
            }
            res.json(dialogs);
        })
    }
    create(req, res)  {
        const postData = {
            author: req.body.author,
            partner: req.body.partner
        }
        const dialog = new DialogModel(postData);
        dialog.save().then((dialogObj) => {
            res.json(dialogObj)
            const message = new MessageModel({
                text: req.body.text,
                dialog: dialogObj._id,
                user: req.body.author
            })
            message
                .save()
                .then(() => {
                    res.json({dialogObj})
                })
                .catch((reason) => {
                    res.json(reason)
                })
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
}
export default DialogController;