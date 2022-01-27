const Thermostat = require("./thermostat");
const readline = require('readline');

const thermostat = new Thermostat

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tempController = () => {
  rl.question('Enter command > ', (change) => {
    switch (change) {
      case "off":
        console.log("Thanks for using our thermostat");
        return rl.close();
      case "down":
        thermostat.down();
        break;
      case "up":
        thermostat.up();
        break;
      case "psm on":
        thermostat.setPowerSavingMode(true);
      break;
      case "psm off":
        thermostat.setPowerSavingMode(false);
      break;
    }

    console.log(thermostat.getTemperature());
    tempController()
  });
};

tempController()