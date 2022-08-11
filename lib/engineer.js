const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, numberId, mail, github) {
        super(name, numberId, mail)
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;