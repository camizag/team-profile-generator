const employee = require("./employee");
class intern extends employee {
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

module.exports = intern;