class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemp = 25;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemp) {
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }

  setPowerSavingMode(mode) {
    mode ? (this.maxTemp = 25) : (this.maxTemp = 32);
  }

  reset() {
    this.temperature = 20;
  }

  getUsage() {
    if (this.temperature < 18) {
      return "Low-usage";
    } else if (this.temperature <= 25) {
      return "Medium-usage";
    } else {
      return "High-usage";
    }
  }
}

module.exports = Thermostat;
