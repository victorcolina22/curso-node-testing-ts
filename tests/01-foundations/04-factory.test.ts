import { buildMakePerson } from "../../src/01-foundations/04-factory";

describe("04-factory", () => {
  const getUUID = () => "1234";
  const getAge = () => 30;
  const makePerson = buildMakePerson({ getUUID, getAge });

  test("buildMakePerson should return a function", () => {
    expect(typeof makePerson).toBe("function");
  });

  test("buildMakePerson should return a person", () => {
    const johndoe = makePerson({ name: "John Doe", birthdate: "1996-22-02" });
    expect(johndoe).toStrictEqual({
      age: 30,
      birthdate: "1996-22-02",
      id: "1234",
      name: "John Doe",
    });
  });
});
