const Employee = require("./Employee");
class Manager extends Employee {
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

module.exports = Manager;