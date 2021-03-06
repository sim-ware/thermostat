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

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.psmMax = 25
  return this.powerSavingMode = true;
};

Thermostat.prototype.isPsmMaxTemp = function(){
  return this.temperature === this.psmMax;
};

Thermostat.prototype.reset = function(){
  this.temperature = 20
  return this.temperature;
};

Thermostat.prototype.usage = function(){
  if (this.getCurrentTemperature() > 0 && this.getCurrentTemperature() < 18){
    return 'low-usage';
  } else if (this.getCurrentTemperature() > 18 && this.getCurrentTemperature() < 25){
    return 'medium-usage';
  } else if (this.getCurrentTemperature() > 25){
    return 'high-usage';
  }
};
