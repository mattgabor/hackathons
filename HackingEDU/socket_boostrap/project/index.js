import sio from 'socket.io';
import http from 'http';
import gameboy from 'gameboy';
import express from 'express';
import babelify from 'babelify';
import browserify from 'browserify-middleware';

let app = express();
let srv = http.createServer(app);

// events
let io = sio(srv);
io.on('connection', socket => {
  socket.on('move', (data) => {
    console.log('someone moved', data);

    setInterval(() => {
      socket.emit('move', 500, 600);
    }, 100);
  });
});

// app routes

app.get('/', (req, res, next) => {
  res.sendfile('index.html');
});

srv.listen(3000, err => {
  if (err) throw err;
  console.log('listening on 3000');
});
