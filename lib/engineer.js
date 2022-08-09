const employee = require("./employee");
class engineer extends employee {
    constructor(name, numberId, mail, github) {
        super(name, numberId, mail)
        this.github = github;
    }
    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = engineer;