'use strict';

function Thermostat() {
  this.MINIMUM_TEMPATURE = 10;
  this.temperature = 20;

}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
};

Thermostat.prototype.hotter = function(number){
  return this.temperature += number
};

Thermostat.prototype.cooler = function(number){
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= number
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPATURE;
};
