const employee = require("./employee");
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

module.exports = intern;