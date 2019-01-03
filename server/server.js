const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app); //override the express server
var io = socketIO(server);

//middleware to pick up files in the public folder
app.use(express.static(publicPath));

//register event listener to listen for a new connection
io.on('connection', (socket) =>{
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('Create message', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');

    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });


});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
