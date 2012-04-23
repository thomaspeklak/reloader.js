var eventEmitter = require('events').EventEmitter,
  fs = require('fs');


var Guard = function(path){
  this.path = path;
  var self = this;
  this.watcher = fs.watch(path, function(){
    self.emit('activity');
  });

};

Guard.prototype = new eventEmitter();



module.exports = Guard;
