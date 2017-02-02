function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
};

Thermostat.prototype.hotter = function(number){
  return this.temperature += number
};

Thermostat.prototype.cooler = function(number){
  return this.temperature -= number
};
