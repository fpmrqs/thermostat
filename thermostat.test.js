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
});