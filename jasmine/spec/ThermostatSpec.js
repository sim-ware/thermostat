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
      it('can switch PSM on, after being switched off', function(){
        thermostat.switchPowerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toBe(true);
      });
  });

  describe('#reset', function(){
      it('resets the temp to 20 degrees', function(){
      thermostat.cooler(5)
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
      });
  });

  describe('#usage', function(){
      it('reports low energy usage if <18', function(){
        thermostat.cooler(5)
        expect(thermostat.usage()).toEqual('low-usage')
      });
      it('reports medium energy usage if <25', function(){
        thermostat.hotter(4)
        expect(thermostat.usage()).toEqual('medium-usage')
      });
      it('reports high energy usage if >25', function(){
        thermostat.hotter(7)
        expect(thermostat.usage()).toEqual('high-usage')
      });
  });

});
