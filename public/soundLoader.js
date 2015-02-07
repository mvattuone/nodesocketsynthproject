function getKick() {
  App.Sounds['kick'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/kick.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['kick'].buffer = buffer;
        var gainNode = context.createGain();
        var top_value = App.Machine.kick_slider.top - App.Machine.kick_slider.bottom;
        gainNode.gain.value = ( App.Machine.kick_slider.position.y - App.Machine.kick_slider.bottom ) / top_value;
        App.Sounds['kick'].loop = false;
        App.Sounds['kick'].connect(gainNode);
        gainNode.connect(context.destination);
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
        var gainNode = context.createGain();
        var top_value = App.Machine.snare_slider.top - App.Machine.snare_slider.bottom;
        gainNode.gain.value = ( App.Machine.snare_slider.position.y - App.Machine.snare_slider.bottom ) / top_value;
        App.Sounds['snare'].connect(gainNode);
        gainNode.connect(context.destination);
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
        var gainNode = context.createGain();
        var top_value = App.Machine.high_hat_slider.top - App.Machine.high_hat_slider.bottom;
        gainNode.gain.value = ( App.Machine.high_hat_slider.position.y - App.Machine.high_hat_slider.bottom ) / top_value;
        App.Sounds['high_hat'].connect(gainNode);
        gainNode.connect(context.destination);
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
        var gainNode = context.createGain();
        var top_value = App.Machine.high_hat_open_slider.top - App.Machine.high_hat_open_slider.bottom;
        gainNode.gain.value = ( App.Machine.high_hat_open_slider.position.y - App.Machine.high_hat_open_slider.bottom ) / top_value;
        App.Sounds['high_hat_open'].connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds['high_hat_open'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getClap() {
  App.Sounds['clap'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/clap.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['clap'].buffer = buffer;
        var gainNode = context.createGain();
        var top_value = App.Machine.clap_slider.top - App.Machine.clap_slider.bottom;
        gainNode.gain.value = ( App.Machine.clap_slider.position.y - App.Machine.clap_slider.bottom ) / top_value;
        App.Sounds['clap'].connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds['clap'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getTom() {
  App.Sounds['tom'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/tom.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['tom'].buffer = buffer;
        var gainNode = context.createGain();
        var top_value = App.Machine.tom_slider.top - App.Machine.tom_slider.bottom;
        gainNode.gain.value = ( App.Machine.tom_slider.position.y - App.Machine.tom_slider.bottom ) / top_value;
        App.Sounds['tom'].connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds['tom'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getCowbell() {
  App.Sounds['cowbell'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/cowbell.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['cowbell'].buffer = buffer;
        var gainNode = context.createGain();
        var top_value = App.Machine.cowbell_slider.top - App.Machine.cowbell_slider.bottom;
        gainNode.gain.value = ( App.Machine.cowbell_slider.position.y - App.Machine.cowbell_slider.bottom ) / top_value;
        App.Sounds['cowbell'].connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds['cowbell'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getShaker() {
  App.Sounds['maraca'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '/samples/maraca.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['maraca'].buffer = buffer;
        var gainNode = context.createGain();
        var top_value = App.Machine.shaker_slider.top - App.Machine.shaker_slider.bottom;
        gainNode.gain.value = ( App.Machine.shaker_slider.position.y - App.Machine.shaker_slider.bottom ) / top_value;
        App.Sounds['maraca'].connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds['maraca'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};