//Libraries
const fs = require("fs");
const inquirer = require("inquirer");

//Templates
const internHTML = require("./src/internHTML");
const employeeHTML = require("./src/employeeHTML");
const managerHTML = require("./src/managerHTML");
const engineerHTML = require("./src/engineerHTML");

//Classes
const intern = require("./lib/intern");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");

function addNewTeamMember() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What'd you want to do?",
            name: "inital choice",
            choices: [
                "Add an employee",
                "Add an engineer",
                "Add a manager",
                "Add an intern",
                "I finished creating my team"
            ]
        }
    ]).then((roleSelected) => {
    
    })
}

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
