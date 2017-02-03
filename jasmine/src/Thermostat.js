'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.psmMax = 25;


}

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature
};

Thermostat.prototype.hotter = function(number){
  return (this.isPsmMaxTemp() ? this.temperature : this.temperature += number)
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

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.psmMax = 32
  return this.powerSavingMode = false;
};

Thermostat.prototype.isPsmMaxTemp = function(){
  return this.temperature === this.psmMax;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20
  return this.temperature;
};
