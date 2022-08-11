const Employee = require("../lib/Employee");

test ("Verify answers for basic questions.", () => {
    const employee = new Employee(
        "Employee",
        1234,
        "employee@mail.com",
    );
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.numberId).toEqual(expect.any(Number));
    expect(employee.mail).toEqual(expect.any(String));
});