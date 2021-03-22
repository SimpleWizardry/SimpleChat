import { MessageModel, DialogModel } from "../models";

class DialogController {
    io;
    constructor(io) {
        this.io = io;
    }
    index = (req, res) => {
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
    create = (req, res) => {
        const userId = req.user._id;
        const postData = {
            text: req.body.text,
            user: userId,
            dialog: req.body.dialog_id
        }
        const message = new MessageModel(postData);
        message
            .save()
            .then((obj) => {
                obj.populate("dialog", (err, message) => {
                        if (err) {
                            return res.status(500).json({
                                status: "error 500",
                                message: err,
                            });
                        }

/*                        DialogModel.findOneAndUpdate(
                            { _id: postData.dialog },
                            { lastMessage: message._id },
                            { upsert: true },
                            (err) => {
                                if (err) {
                                    return res.status(500).json({
                                        status: "error",
                                        message: err,
                                    });
                                }
                            }
                        );*/

                        res.json(message);
                        this.io.emit("SERVER:NEW_MESSAGE", message);
                    }
                );
            })
            .catch((reason) => {
                res.json(reason);
            });
    }
    delete = (req, res) => {
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
}
export default DialogController;