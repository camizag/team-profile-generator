//Libraries
const fs = require("fs");
const inquirer = require("inquirer");

//Templates
const intern = require("./templates/intern");
const employee = require("./templates/employee");
const manager = require("./templates/manager");
const engineer = require("./templates/engineer");

const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },{
        type: "input",
        message: "What is your ID number?",
        name: "numberId"
    },{
        type: "input",
        message: "What is your email?",
        name: "mail"
    },{
        type: "input",
        message: "What is your role withing the team?",
        name: "role",
        choices: [
            "Employee",
            "Manager",
            "Engineer",
            "Intern",
        ],
    }
];

