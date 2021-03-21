import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { UserController, DialogController, MessageController } from "./controllers";
import dotenv from 'dotenv';
import { updateLastSeen, checkAuth } from "./middlewares";
import { loginValidation } from "./libs/validations";

const app = express();
dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_LOGIN}qmpz@mycluster.ehxqa.mongodb.net/ChatDB?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB'));

app.use(bodyParser.json());
app.use(updateLastSeen);
app.use(checkAuth);

const User = new UserController();
const Dialog= new DialogController();
const Message= new MessageController();

app.get('/user/:id', User.show);
app.delete('/user/:id', User.delete);
app.post('/user/registration', User.create);
app.post('/user/login', User.login);

app.get('/dialogs', Dialog.index);
app.delete('/dialog/:id', Dialog.delete);
app.post('/dialog', Dialog.create);

app.get('/messages', Message.index);
app.post('/messages', Message.create);
app.delete('/messages/:id', Message.delete);

app.listen(process.env.PORT, function(){
    console.log('Example app listening on port 3005')
});