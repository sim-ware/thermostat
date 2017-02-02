'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.PSMMAX = 25;


}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
};

Thermostat.prototype.hotter = function(number){
  return this.temperature += number
};

Thermostat.prototype.cooler = function(number){
  return (this.isMinimumTemperature() ? this.temperature : this.temperature -= number)
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};
//
// Thermostat.prototype.isPsmMax = function() {
//   return this.temperature === this.PSMMAX;
// };
