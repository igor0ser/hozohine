import io from 'socket.io-client';

const socket = io.connect('http://localhost:8080');

const onComment = (callback) => {
  socket.on('connect', () => {
    console.log('connect');
    socket.on('comment', callback);
  });
};

export default { onComment };
