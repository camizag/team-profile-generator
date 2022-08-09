const employee = require("./employee");

module.exports = intern;

class intern extends employee {
    constructor(name, numberId, mail, college) {
        super(name, numberId, mail)
        this.college = college;
    }

    getCollege() {
        return this.college;
    }

    getRole() {
        return "Intern";
    }
}