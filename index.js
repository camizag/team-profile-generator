//Libraries
const fs = require("fs");
const inquirer = require("inquirer");

//Templates
const renderHTML = require("./src/templateHTML");
const internHTML = require("./src/internHTML");
const managerHTML = require("./src/managerHTML");
const engineerHTML = require("./src/engineerHTML");

//Classes
const intern = require("./lib/intern");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");


const managerQuestions = [
    {
        type: "input",
        message: "What is your name?",
        name: "nameManager"
    },{
        type: "input",
        message: "What is your ID number?",
        name: "numberIdManager"
    },{
        type: "input",
        message: "What is your email?",
        name: "mailManager"
    },{
        type: "input",
        message: "What is your office number?",
        name: "numberOfficeManager",
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "nameIntern",
    },{
        type: "input",
        message: "What is the intern's ID number?",
        name: "numberIdIntern",
    },{
        type: "input",
        message: "What is the intern's email",
        name: "mailIntern",
    },{
        type: "input",
        message: "What college did the intern attend?",
        name: "collegeIntern",
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "nameEngineer",
    },{
        type: "input",
        message: "What is the engineer's ID number?",
        name: "numberIdEngineer",
    },{
        type: "input",
        message: "What is the engineer's email?",
        name: "mailEngineer",
    },{
        type: "input",
        message: "What is the engineer's Github username?",
        name: "githubEngineer",
    }
];

