import { UserModel } from "../models";
import { createJWTToken } from "../libs";

class UserController {
    show(req, res) {
        const id = req.params.id;
        UserModel.findById(id, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'User not found'
                })
            }
            res.json(user);
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
            email: req.body.email,
            full_name: req.body.full_name,
            password: req.body.password,
        }
        res.send()
        const user = new UserModel(postData);
        user.save().then((obj) => {
            res.json(obj)
        }).catch((reason) => {
            res.json(reason)
        });
    }
    login(req, res) {
        const postData = {
            email: req.body.email,
            password: req.body.password
        }

        UserModel.findOne({email: postData.email}, (err, user) => {
            if (err) {
                return res.status(404).json({
                    message: 'User not found,you should sign up instead'
                })
            }
            if (user.password === postData.password){
                const token = createJWTToken(user)
                res.json({
                    status: 'success',
                    token
                })
            } else {
                res.json({
                    status: 'error',
                    message: 'invalid password or email'
                })
            }
        })
    }
}

export default UserController;