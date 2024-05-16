#! /usr/bin/env node

import inquirer from "inquirer"; 

const currency : any = {
    USD : 1, // Base currency
    PKR : 288,
    NPR : 133.27,
    INR : 83.32,
    EUR : 0.94,
    KRW : 1351.27,
    DZD : 134.39,
    AMD : 392.25,
    AED : 3.65,
}

let user_answer =  await inquirer.prompt([
    {
        name : "from",
        type : "list",
        message : "Enter from currency",
        choices : ["USD","PKR","NPR","INR","EUR","KRW","DZD","AMD","AUD",]
    },
    {
        name : "to",
        type : "list",
        message : "Enter to currency",
        choices : ["USD","PKR","NPR","INR","EUR","KRW","DZD","AMD","AUD",]
    },
    {
        name : "amount",
        type : "number",
        message : "Enter your Amount",
    },
]);

let fromAmount = currency[user_answer.from];  // Exchange Rate
let toAmount = currency[user_answer.to];   // Exchange Rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;  // USD base currency
let convertAmount = baseAmount * toAmount; 
console.log(`your ${user_answer.from} ${user_answer.amount} is equal to ${user_answer.to} ${convertAmount}`);