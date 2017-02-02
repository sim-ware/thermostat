'use strict';

describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
   thermostat = new Thermostat();
  });


  describe('#temperature', function(){
    it('starts at 20 degrees', function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

  });

  describe('#hotter', function(){
    it('raises the temperature by 1', function() {
      expect(thermostat.hotter(1)).toEqual(21);
    });
  });

  describe('#cooler', function(){
    it('lowers the temperature by 1', function() {
      expect(thermostat.cooler(1)).toEqual(19);
    });
    it('Raises error if temperature is 10 degrres or less', function(){
      for(var i = 0; i < 11; i++) {
        thermostat.cooler(1);
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });











});
