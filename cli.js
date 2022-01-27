const Thermostat = require("./thermostat");
const readline = require('readline');

const thermostat = new Thermostat

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const tempController = () => {
  rl.question('Enter command > ', (change) => {
    if (change === "off") {
      return console.log("Thanks for using our thermostat")
    } else if (change === "up") {
      thermostat.up();
    } else {
      thermostat.down();
    }
    console.log(thermostat.getTemperature());
    tempController()
  });
};

tempController()