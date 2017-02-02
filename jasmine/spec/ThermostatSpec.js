describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
   thermostat = new Thermostat();
  });


  describe('#temperature', function(){
    it('reads the thermostat temperature', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
