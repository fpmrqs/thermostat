const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  const thermostat = new Thermostat;
  it("has initial temperature of 20 degrees", () => {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("adds one degree to temperature", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  });

  it("decreases one degree in temperature", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("decreases one degree in temperature", () => {
    for(let i = 0; i < 13; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual(10);
  });

  it("power saving mode is on by default", () => {
    for(let i = 0; i < 16; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it("can switch powerSaving off", () => {
    thermostat.setPowerSavingMode(false);
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(26);
  });

  it("resets temperature to 20 degrees", () => {
    thermostat.reset()
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("has a current energy usage", () => {
    expect(thermostat.getUsage()).toEqual("Medium-usage");

    for(let i = 0; i < 7; i++) { thermostat.up(); }
    expect(thermostat.getUsage()).toEqual("High-usage");

    for(let i = 0; i < 11; i++) { thermostat.down(); }
    expect(thermostat.getUsage()).toEqual("Low-usage");
  });
});