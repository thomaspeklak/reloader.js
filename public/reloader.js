var socket = io.connect('http://localhost:17001');
socket.on('reload', function(){
  location.reload();
});
