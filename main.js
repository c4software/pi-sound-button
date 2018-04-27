var gpio = require('rpi-gpio');
const { exec } = require('child_process');

gpio.on('change', function(channel, value) {
  if(value){
	exec("play -v 0.1 pikachu.mp3")
  }
});
gpio.setup(16, gpio.DIR_IN, gpio.EDGE_BOTH);
