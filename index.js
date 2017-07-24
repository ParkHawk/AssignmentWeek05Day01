const chalk = require("chalk");
const moment = require("moment");


console.log("It is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")) + ".");
console.log("It is the " + chalk.magenta(moment().format("DDDo")) + " day of the year.");
console.log("It is the " + chalk.cyan(Math.floor((moment()-moment().startOf("day"))/1000)) + " second of the day.");

if (moment([moment().toDate()]).isDST() == true) {
  console.log("It " + chalk.green("is") + " during Daylights Savings time.");
} else {
  console.log("It " + chalk.green("is not") + " during Daylights Savings time.");
}


if (moment(moment().toDate()).isLeapYear() == true) {
  console.log("It " + chalk.red("is") + " a leap year.")
}else {
  console.log("It " + chalk.red("is not") + " a leap year.")
}
