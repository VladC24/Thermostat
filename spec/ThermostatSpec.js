'use strict;'

describe ("Thermostat", function() {
	var thermostat;

	beforeEach (function(){
		thermostat = new Thermostat();
	});

	it('defaults with 20 degrees', function() {
		expect(thermostat.temperature).toEqual(20);
	});

	it('increases the temperature by 1 degree', function() {
		thermostat.up();
		expect(thermostat.temperature).toEqual(21);
	});

	it('decreases the temperature by 1 degree', function() {
		thermostat.down();
		expect(thermostat.temperature).toEqual(19);
	});

	it('allows for the minimum temperature to be 10 degrees', function() {
		for(var i=0; i<11; i++) {
			thermostat.down()
		}
		expect(thermostat.temperature).toEqual(10);
	});

	it('starts with power saving mode on', function() {
		expect(thermostat.powerSavingMode).toBe(true);
	});

	it('has a maximum temperature of 25 with power mode on', function() {
		for(var i = 0; i < 6; i++) {
			thermostat.up()
		}
		expect(thermostat.temperature).toEqual(25);
	});

	it('can switch power mode off', function() {
		thermostat.powerSavingModeOff();
		expect(thermostat.powerSavingMode).toBe(false);
	});

});