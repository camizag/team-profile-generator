const Manager = require("../lib/Manager");

test ("Verify answers for basic questions.", () => {
    const manager = new Manager(
        "Manager",
        3333,
        "manager@mail.com",
    );
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.numberId).toEqual(expect.any(Number));
    expect(manager.mail).toEqual(expect.any(String));
});