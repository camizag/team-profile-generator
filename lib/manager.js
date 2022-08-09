const employee = require("./employee");
class manager extends employee {
    constructor(name, numberId, mail, numberOffice) {
        super(name, numberId, mail)
        this.numberOffice = numberOffice;
    }

    getOffice() {
        return this.numberOffice;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = manager;