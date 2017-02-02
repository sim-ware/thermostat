function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
};

Thermostat.prototype.hotter = function(){
  return this.temperature + 1
};
