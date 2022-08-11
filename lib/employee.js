class Employee {
    constructor(name, numberId, role, mail) {
        this.name = name;
        this.numberId = numberId;
        this.mail = mail;
        this.role = role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.numberId;
    }

    getMail() {
        return this.mail;
    }
    
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;