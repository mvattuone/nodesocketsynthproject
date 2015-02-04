function getKick() {
  App.Sounds['kick'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/kick.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['kick'].buffer = buffer;

        App.Sounds['kick'].connect(context.destination);
        App.Sounds['kick'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getSnare() {
  App.Sounds['snare'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/snare.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['snare'].buffer = buffer;

        App.Sounds['snare'].connect(context.destination);
        App.Sounds['snare'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getHighHat() {
  App.Sounds['high_hat'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/high_hat.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['high_hat'].buffer = buffer;

        App.Sounds['high_hat'].connect(context.destination);
        App.Sounds['high_hat'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getHighHatOpen() {
  App.Sounds['high_hat_open'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/high_hat_open.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['high_hat_open'].buffer = buffer;

        App.Sounds['high_hat_open'].connect(context.destination);
        App.Sounds['high_hat_open'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};