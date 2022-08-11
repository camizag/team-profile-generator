const Intern = require("../lib/Intern");

test ("Verify answers for basic questions.", () => {
    const intern = new Intern(
        "Intern",
        1111,
        "intern@mail.com",
    );
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.numberId).toEqual(expect.any(Number));
    expect(intern.mail).toEqual(expect.any(String));
});