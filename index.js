//Libraries
const fs = require("fs");
const inquirer = require("inquirer");

//Classes
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

const newTeam = [];



function addNewTeamMember() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "newMember",
            choices:
            [
                "Add an engineer",
                "Add an intern",
                "Finish",
            ]
        }
    ])
    .then((answers) => {
        if (answers.newMember === "Add an engineer") {
            createEngineer();
        } else if (answers.newMember === "Add an intern") {
            createIntern();
        } else {
            console.log(newTeam);
            createTeamHTML();
        }
    })
    .catch((err) => console.log(err))
}


function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "nameManager",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("There was a problem.");
                    return false;
                }
            },
        },{
            type: "input",
            message: "What is your ID number?",
            name: "numberIdManager",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("There was a problem.");
                    return false;
                }
            },
        },{
            type: "input",
            message: "What is your email?",
            name: "mailManager",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("There was a problem.");
                    return false;
                }
            },
        },{
            type: "input",
            message: "What is your office number?",
            name: "numberOfficeManager",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("There was a problem.");
                    return false;
                }
            },
        },
    ])
    .then((res, err) => {
        if (err) console.error(err);
        const newManager = new Manager (
            res.name, res.numberId, res.mail, res.numberOffice
        );
        newTeam.push(newManager);
        addNewTeamMember();

    });
}



createManager();