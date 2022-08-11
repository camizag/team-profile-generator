const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, numberId, mail, github) {
        super(name, numberId, mail, "Engineer");
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;