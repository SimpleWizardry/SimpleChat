import {loginValidation} from "../libs/validations";
import bodyParser from "body-parser";
import {checkAuth, updateLastSeen} from "../middlewares";
import {DialogController, MessageController, UserController} from "../controllers";

export default (app, io) => {
    app.use(bodyParser.json());
    app.use(updateLastSeen);
    app.use(checkAuth);

    const UserCtrl = new UserController(io);
    const DialogCtrl = new DialogController(io);
    const MessageCtrl = new MessageController(io);

    app.get('/user/me', UserCtrl.getMe);
    app.get('/user/:id', UserCtrl.show);
    app.delete('/user/:id', UserCtrl.delete);
    app.post('/user/signup', UserCtrl.create);
    app.post('/user/signin', loginValidation, UserCtrl.login);

    app.get('/dialogs', DialogCtrl.index);
    app.delete('/dialog/:id', DialogCtrl.delete);
    app.post('/dialog', DialogCtrl.create);

    app.get('/messages', MessageCtrl.index);
    app.post('/messages', MessageCtrl.create);
    app.delete('/messages/:id', MessageCtrl.delete);
}