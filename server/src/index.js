import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import createRoutes from './core/routes';
import createSocket from './core/socket';
import connectToDb from './core/dbConnection'

const app = express();
const http = createServer(app);
const io = createSocket(http);

dotenv.config();

createRoutes(app, io);
connectToDb(process.env.DB_LOGIN);

http.listen(3000, function(){
    console.log(`Example app listening on port ${process.env.PORT}`)
});
