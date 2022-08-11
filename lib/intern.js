const Employee = require("./Employee");
class Intern extends Employee {
    constructor(name, numberId, mail, college) {
        super(name, numberId, mail)
        this.college = college;
        this.role = "Intern";
    }

    getCollege() {
        return this.college;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;