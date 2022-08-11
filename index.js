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

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "nameEngineer",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("There was a problem.");
                    return false;
                }
            }
        },{
            type: "input",
            message: "What is the engineer's ID number?",
            name: "numberIdEngineer",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("There was a problem.");
                    return false;
                }
            }
        },{
            type: "input",
            message: "What is the engineer's email?",
            name: "mailEngineer",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("There was a problem.");
                    return false;
                }
            }
        },{
            type: "input",
            message: "What is the engineer's Github username?",
            name: "githubEngineer",
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
        const newEngineer = new Engineer (
            res.name, res.numerId, res.mail, res.github,
        );
        newTeam.push(newEngineer);
        addNewTeamMember();
    });
}


function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "nameIntern",
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
            message: "What is the intern's ID number?",
            name: "numberIdIntern",
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
            message: "What is the intern's email",
            name: "mailIntern",
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
            message: "What college did the intern attend?",
            name: "collegeIntern",
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
        const newIntern = new Intern (
            res.name, res.numberId, res.mail, res.college
        );
        newTeam.push(newIntern);
        addNewTeamMember();
    })
}

createManager();