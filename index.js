//Libraries
const fs = require("fs");
const inquirer = require("inquirer");

//Templates
const internTemp = require("./templates/intern");
const employeeTemp = require("./templates/employee");
const managerTemp = require("./templates/manager");
const engineerTemp = require("./templates/engineer");

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
        type: "list",
        message: "What is your role within the team?",
        name: "role",
        choices: [
            "Employee",
            "Manager",
            "Engineer",
            "Intern",
        ],
    }
];