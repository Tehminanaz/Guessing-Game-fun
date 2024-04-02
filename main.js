#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//1: computer will generate random number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const anwers = await inquirer.prompt([{
        name: "usregussednumber",
        type: "number",
        massage: "please guess one number between 1-6",
    }]);
if (anwers.usregussednumber === randomNumber) {
    console.log(chalk.blue("congratulation you gess right number."));
}
else {
    console.log(chalk.red("you guessed wrong number."));
}
