module.exports = function(io, socket){
    io.emit('chatMessage',{
        type:'status',
        text:'connected',
        created:Date.now(),
        username: socket.request.user.username
    });

    socket.on('chatMessage',(message)=>{
        message.type = 'message';
        message.created = Date.now();
        message.username = socket.request.user.username;

        io.emit('chatMessage',message);
    });

    socket.on('disconnect',()=>{
        io.emit('chatMessage',{
            type:'status',
            text:'disconnected',
            created: Date.now(),
            username: socket.request.user.username
        });
    });

}