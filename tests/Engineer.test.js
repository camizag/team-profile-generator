const Engineer = require("../lib/Engineer");

test ("Verify answers for basic questions.", () => {
    const engineer = new Engineer(
        "Engineer",
        2222,
        "engineer@mail.com",
    );
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.numberId).toEqual(expect.any(Number));
    expect(engineer.mail).toEqual(expect.any(String));
});