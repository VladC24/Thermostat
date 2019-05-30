function Thermostat() {
	this.MINIMUM_TEMPERATURE = 10;
	this.MAXIMUM_TEMPERATURE = 32;
	this.HIGH_USAGE_LIMIT = 25;
	this.LOW_USAGE_LIMIT = 18;
	this.temperature = 20;
	this.powerSavingMode = true;
};

Thermostat.prototype.up = function() {
	if(this.powerSavingMode === true && this.temperature === 25) {
		return;
	}
	if(this.powerSavingMode === false && this.temperature === 32) {
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

Thermostat.prototype.powerSavingModeOff = function() {
	this.powerSavingMode = false
};

Thermostat.prototype.powerSavingModeOn = function() {
	this.powerSavingMode = true
};

Thermostat.prototype.reset = function() {
	this.temperature = 20;
};

Thermostat.prototype.currentUsage = function() {
		if (this.temperature >= this.HIGH_USAGE_LIMIT) {
		return 'High Usage';
		} else if (this.temperature < this.HIGH_USAGE_LIMIT && this.temperature > this.LOW_USAGE_LIMIT) {
			return 'Medium Usage';
		} else if (this.temperature <= this.LOW_USAGE_LIMIT) {
			return 'Low Usage';
		}
};