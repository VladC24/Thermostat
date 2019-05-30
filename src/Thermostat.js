function Thermostat() {
	this.MINIMUM_TEMPERATURE = 10;
	this.temperature = 20;
	this.powerSavingMode = true
};

Thermostat.prototype.up = function() {
	if(this.powerSavingMode === true && this.temperature === 25) {
		return;
	}
	this.temperature += 1;
};

Thermostat.prototype.down = function() {
	if(this.temperature === this.MINIMUM_TEMPERATURE) {
		return;
	}
	this.temperature -= 1;
};


