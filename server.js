/*const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});*/
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
  socket.on('message', ({ name, message }) => {
    io.emit('message', { name, message })
  })
})

http.listen(4000, function() {
  console.log('listening on port 4000')
})