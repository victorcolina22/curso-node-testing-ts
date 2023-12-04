import { getUserById } from "../../src/01-foundations/03-callbacks";

describe("03-callbacks", () => {
  test("getUserById should return an error if user does not exist", (done) => {
    const ID = 10;
    getUserById(ID, (err, user) => {
      expect(err).toBe(`USER not found ${ID}`);
      expect(user).toBeUndefined();
      done(); // Se utiliza el "done" para manejar pruebas con código bloqueante, en este caso el "callback"
    });
  });

  test("getUserById should return John Doe", (done) => {
    const ID = 1;
    getUserById(ID, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toStrictEqual({ id: ID, name: "John Doe" });
      done();
    });
  });
});
