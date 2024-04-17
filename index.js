#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "sourceCurrency",
        message: "Please select the currency you want to convert from the list below: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "targetCurrency",
        message: "Choose the currency you want to convert to: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    }
]);
let fromAmount = currency[userAnswer.sourceCurrency]; //exchange rate
let toAmount = currency[userAnswer.targetCurrency]; // USD base currency
let Amount = userAnswer.amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = Math.round(baseAmount * toAmount);
console.log(convertedAmount);
