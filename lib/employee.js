class employee {
    constructor(name, numberId, mail) {
        this.name = name;
        this.numberId = numberId;
        this.mail = mail;
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
}

module.exports = employee;