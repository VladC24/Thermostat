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
		expect(thermostat.up()).toEqual(21);
	});

});