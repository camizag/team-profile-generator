const employee = require("./employee");
class manager extends employee {
    constructor(name, numberId, mail, numberOffice) {
        super(name, numberId, mail)
        this.numberOffice = numberOffice;
        this.role= "Manager";
    }

    getOffice() {
        return this.numberOffice;
    }

    getRole() {
        return this.role;
    }
}

module.exports = manager;