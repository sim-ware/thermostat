$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
})

$('#temp-up').click(function() {
  thermostat.hotter(1);
  updateTemperature();
})

$('#temp-down').click(function() {
  thermostat.cooler(1);
  updateTemperature();
})

$('#temp-reset').click(function() {
  thermostat.reset();
  updateTemperature();
})

$('#psm-on').click(function(){
  thermostat.
})
