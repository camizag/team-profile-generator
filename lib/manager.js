const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, numberId, mail, numberOffice) {
        super(name, numberId, mail, "Manager");
        this.numberOffice = numberOffice;
    }

    getOffice() {
        return this.numberOffice;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;