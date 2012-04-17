var express = require('express'),
    app =express.createServer(),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.get('/', function(req, res){
  io.sockets.emit('reload');
  res.send('ok');
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.use(app.router);
});


app.listen(17001);
