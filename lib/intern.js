const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, numberId, mail, college) {
        super(name, numberId, mail, "Intern");
        this.college = college;
    }

    getCollege() {
        return this.college;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;