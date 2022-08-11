//Libraries
const fs = require("fs");
const inquirer = require("inquirer");

//Classes
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


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
            renderTeam();
        }
    })
    .catch((err) => console.log(err))
}


function createManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
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
            name: "numberId",
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
            name: "mail",
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
            name: "numberOffice",
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
            name: "name",
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
            name: "numberId",
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
            name: "mail",
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
            name: "github",
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
            name: "name",
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
            name: "numberId",
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
            name: "mail",
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
            name: "college",
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



function renderTeam() {
	const htmlPageContent = [];
	const htmlPageHead = `
	<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
      <!-- Header -->
      <div class="container-fluid main-heading">
        <div class="header-container">
            <div class="jumbotron">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
      </div>
    
  
  
      <!-- Cards -->
      <div class="row d-flex justify-content-around">`

	htmlPageContent.push(htmlPageHead);

	for (let i = 0; i < newTeam.length; i++) {
		let card = `
                            <div class="card" style="width: 18rem;">
                            <h5 class="card-header">
                            ${newTeam[i].name}
                            <br>
                            ${newTeam[i].role}  
                            </h5>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${newTeam[i].numberId}</li>
                            <li class="list-group-item">Email: ${newTeam[i].mail}</li>
                            </ul>
                            </div>`;
			if (newTeam[i].numberOffice) {
				card += `
                            <li class="list-group-item">Office Number: ${newTeam[i].numberOffice}</li>
                            `;
			}if (newTeam[i].github) {
				card += `
                            <li class="list-group-item">Office Number: ${newTeam[i].github}</li>
                            `;
			}if (newTeam[i].college) {
			card += `
                            <li class="list-group-item">Office Number: ${newTeam[i].college}</li>
                            `;
			}
			card += `
							</ul>			
                            </div>  
  

                            </body>
                            </html>`;

		htmlPageContent.push(card);
	}

	fs.writeFile('dist/index.html', htmlPageContent.join(''), (err) =>
		err ? console.log(err) : console.log('Successfully created index.html!')
	);
}



createManager();