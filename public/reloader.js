var socket = io.connect('http://localhost:17001');
socket.on('reload', function(){
  location.reload();
});

(function(){
  if(!location.search.search('cssrefresh')){return;}

  var script=document.createElement('script'),
    head=document.getElementsByTagName('head');

  script.setAttribute('src','http://cssrefresh.frebsite.nl/js/cssrefresh.js');
  head[0].appendChild(script);
})();
