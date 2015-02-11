function getKick() {
  App.Sounds['kick'] = context.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', '../samples/kick.wav', true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds['kick'].buffer = buffer;
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "lowpass";
        var filter_frequency = (20000 * (App.Machine.kick_knob.state / 100)) + 200 ;
        biquadFilter.frequency.value = filter_frequency;
        var gainNode = context.createGain();
        var top_value = App.Machine.kick_slider.top - App.Machine.kick_slider.bottom;
        gainNode.gain.value = (( App.Machine.kick_slider.position.y - App.Machine.kick_slider.bottom ) / top_value) - .1;
        App.Sounds['kick'].loop = false;
        App.Sounds['kick'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
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
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "highpass";
        var filter_frequency = 16000 * (App.Machine.snare_knob.state / 100) ;
        biquadFilter.frequency.value = filter_frequency;
        var gainNode = context.createGain();
        var top_value = App.Machine.snare_slider.top - App.Machine.snare_slider.bottom;
        gainNode.gain.value = (( App.Machine.snare_slider.position.y - App.Machine.snare_slider.bottom ) / top_value) - .1;
        App.Sounds['snare'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
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
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "highpass";
        var filter_frequency = 12000 * (App.Machine.high_hat_knob.state / 100) ;
        biquadFilter.frequency.value = filter_frequency;
        var gainNode = context.createGain();
        var top_value = App.Machine.high_hat_slider.top - App.Machine.high_hat_slider.bottom;
        gainNode.gain.value = ( App.Machine.high_hat_slider.position.y - App.Machine.high_hat_slider.bottom ) / top_value;
        App.Sounds['high_hat'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
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
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "highpass";
        var filter_frequency = 16000 * (App.Machine.high_hat_open_knob.state / 100) ;
        biquadFilter.frequency.value = filter_frequency;
        var top_value = App.Machine.high_hat_open_slider.top - App.Machine.high_hat_open_slider.bottom;
        gainNode.gain.value = ( App.Machine.high_hat_open_slider.position.y - App.Machine.high_hat_open_slider.bottom ) / top_value;
        App.Sounds['high_hat_open'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
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
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "highpass";
        var filter_frequency = 2000 * (App.Machine.clap_knob.state / 100) ;
        biquadFilter.frequency.value = filter_frequency;
        var top_value = App.Machine.clap_slider.top - App.Machine.clap_slider.bottom;
        gainNode.gain.value = ( App.Machine.clap_slider.position.y - App.Machine.clap_slider.bottom ) / top_value;
        App.Sounds['clap'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
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
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "highpass";
        var filter_frequency = 2000 * (App.Machine.tom_knob.state / 100) ;
        biquadFilter.frequency.value = filter_frequency;
        var top_value = App.Machine.tom_slider.top - App.Machine.tom_slider.bottom;
        gainNode.gain.value = ( App.Machine.tom_slider.position.y - App.Machine.tom_slider.bottom ) / top_value;
        App.Sounds['tom'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
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
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "highpass";
        var filter_frequency = 16000 * (App.Machine.cowbell_knob.state / 100) ;
        biquadFilter.frequency.value = filter_frequency;
        var top_value = App.Machine.cowbell_slider.top - App.Machine.cowbell_slider.bottom;
        gainNode.gain.value = ( App.Machine.cowbell_slider.position.y - App.Machine.cowbell_slider.bottom ) / top_value;
        App.Sounds['cowbell'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
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
        var biquadFilter = context.createBiquadFilter();
        biquadFilter.type = "highpass";
        var filter_frequency = 16000 * (App.Machine.shaker_knob.state / 100) ;
        biquadFilter.frequency.value = filter_frequency;
        var top_value = App.Machine.shaker_slider.top - App.Machine.shaker_slider.bottom;
        gainNode.gain.value = ( App.Machine.shaker_slider.position.y - App.Machine.shaker_slider.bottom ) / top_value;
        App.Sounds['maraca'].connect(biquadFilter);
        biquadFilter.connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds['maraca'].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getBass(note) {
  App.Sounds["bass_"+note] = context.createBufferSource();
  var request = new XMLHttpRequest();
  var address = "/samples/bass_"+note+".wav"
  console.log(address);
  request.open('GET', address, true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds["bass_"+note].buffer = buffer;
        var gainNode = context.createGain();
        gainNode.gain.value = 1.3;
        App.Sounds["bass_"+note].connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds["bass_"+note].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};

function getKey(note) {
  App.Sounds["key_"+note] = context.createBufferSource();
  var request = new XMLHttpRequest();
  var address = "/samples/key_"+note+".wav"
  console.log(address);
  request.open('GET', address, true);

  request.responseType = 'arraybuffer';

  request.onload = function() {
    var audioData = request.response;

    context.decodeAudioData(audioData, function(buffer) {
        App.Sounds["key_"+note].buffer = buffer;
        var gainNode = context.createGain();
        gainNode.gain.value = .6;
        App.Sounds["key_"+note].connect(gainNode);
        gainNode.connect(context.destination);
        App.Sounds["key_"+note].loop = false;
      },

      function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
};
