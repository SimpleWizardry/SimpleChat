import socket from 'socket.io';

export default (http) => {
/*    const io = socket(http,{
        cors: {
            origin: "http://localhost:63342",
        }}
    );*/
    const io = socket(http,{
        cors: {
            origin: "http://localhost:3000",
            //allowedHeaders: ["my-custom-header"],
            credentials: true
        }}
    );

    io.on('connection', (socket) => {
        console.log('user was connected');
        socket.on('DIALOGS:JOIN', (dialogId) => {
            socket.dialogId = dialogId;
            socket.join(dialogId);
        });
        socket.on('DIALOGS:TYPING', (obj) => {
            socket.broadcast.emit('DIALOGS:TYPING', obj);
        });
    });

    return io;
};