$(function() {

  var socket = io.connect('http://localhost:8080', { rememberTransport: false, transports: ['WebSocket', 'Flash Socket', 'AJAX long-polling']});

  console.log("whats up in here");

  // function pushButton (data) {
  //   console.log("pushButton(data) called");
  // }

  // socket.on('pushedButton', function(data) {
  //   pushButton(data);
  //   return console.log(data);
  // });
});
