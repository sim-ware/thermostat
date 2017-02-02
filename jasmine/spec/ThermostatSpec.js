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
    it("it doesn't exceed 25 if PSMode is on", function(){
      for(var i = 0; i < 6; i++) {
        thermostat.hotter(1);
        }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
    });
    it("doesn't exceed 32 when PSMode is off", function(){
      thermostat.switchPowerSavingModeOff();
      for(var i = 0; i < 13; i++) {
        thermostat.hotter(1);
        }
      expect(thermostat.getCurrentTemperature()).toEqual(32)
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

  describe('#powerSaving', function() {
      it('#powerSaving is on by default', function() {
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
      });
      it('can switch PSM off', function(){
        thermostat.switchPowerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toBe(false);
      });
  });

});
      // it('When on max temperature is 25 degrees', function(){
      //   thermostat.powerSaving();
      //   for(var i = 0; i < 6; i++) {
      //   thermostat.hotter(1);
      //   }
      //   expect(thermostat.getCurrentTemperature()).toEqual(25);
      // })
