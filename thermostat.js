class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemp = 25;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if(this.temperature < this.maxTemp){
      this.temperature++;
    }
  }

  down() {
    if (this.temperature > 10) {
      this.temperature--;
    }
  }

  setPowerSavingMode(boo) {
    boo ? this.maxTemp = 25 : this.maxTemp = 32;
  }

  reset() {
    this.temperature = 20;
  }

  getUsage() {
    this.temperature < 18 ? return ("Low-usage") : this.temperature <= 25 ? return ("Medium-usage") : return ("High-usage");
  }
}

module.exports = Thermostat;
